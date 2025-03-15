import { PROPERTIES } from './init'

// export const parse = (function () {
const REG_GENERAL = /\/\/|\/\*|\*\/|[\r\n\u2028\u2029]|[^,\r\n\u2028\u2029*/\\{}:;`'"]+|./g

const TYPE_ROOT = 1
const TYPE_COMMENT_LINE = 2
const TYPE_COMMENT_BLOCK = 3
const TYPE_STRING = 4
const TYPE_VALUE = 5
const TYPE_BLOCK = 6
// const TYPE_CIRCLES = 'CIRCLES'
// const TYPE_SQUARES = 'SQUARES'

const CONCAT_RULES = {
  '@container': 1,
  '@document': 1,
  '@layer': 1,
  '@media': 1,
  '@scope': 1,
  '@starting-style': 1,
  '@supports': 1,
}

const REG_NOT_STR = /^[^`'"]/
const REG_SEL_SPLIT = /\s*([\s>+~^|=])\s*|([()[\]&])/
const REG_NOT_SYS = /^[^,\s>+~]/
const REG_IS_HIDDEN_SEL = /^\._/
const REG_TRIM_SYS = /^[\s>+~]+|[\s>+~]+$/g

const REG_ONE_SPACE = /\s+/g

class _CSSNode {
  type: number
  raw: string[]
  rules: [string, string][]
  all: string[] | null

  is: boolean

  parent: _CSSNode | null
  children: _CSSNode[]
  // comments: _CSSNode[]

  tmp: { r: string[]; l: _CSSNode; c: any }

  constructor(type: number, parent: _CSSNode) {
    this.type = type
    this.raw = []
    this.rules = []
    this.all = null
    this.is = false

    this.parent = parent
    parent.children.push(this), (this.tmp = parent.tmp)

    this.children = []
  }
}

function parseComments(node: _CSSNode) {
  if (!node.is && (node.type === TYPE_COMMENT_LINE || node.type === TYPE_COMMENT_BLOCK)) {
    node.is = true
    const a = node.raw
    if (a.length) a.push('*/'), node.tmp.r.push('/*' + a.join(''))
  }
}

function parseValues(node: _CSSNode) {
  if (!node.is && node.type === TYPE_VALUE) {
    node.is = true
    const a = node.raw
    if (a.length) {
      const a0 = a[0]
      const a1 = a[1]
      if (a1 !== ':') a1 && a.splice(1, 0, ' ')
      else a[0] = PROPERTIES.hasOwnProperty(a0) ? PROPERTIES[a0] : a0
      a.push(';')
      const attr = a.join('')

      const tmp = node.tmp
      const result = tmp.r
      const lastAll = tmp.l.all!

      const parent = node.parent!
      let all = parent.all!
      if (!all) {
        const raw = parent.raw
        const isSelector = raw.length > 0
        const rules = parent.rules

        const l = rules.length
        all = parent.all = Array(isSelector ? l + 1 : l)
        for (let i = 0; i < l; i++) all[i] = rules[i].join('')
        if (isSelector) all[l] = raw.join(',')
      }
      node.all = all

      if (all !== lastAll) {
        let j = 0
        let l = all.length
        for (; j < l && all[j] === lastAll[j]; j++);
        for (let l = lastAll.length; l-- > j; ) result.push('}')
        for (; j < l; j++) result.push(all[j], '{')
      }

      result.push(attr)
      tmp.l = node
    }
  }
}

function parseBlocks(node: _CSSNode) {
  if (!node.is && node.type === TYPE_BLOCK) {
    node.is = true
    const a = node.raw
    if (a.length) {
      for (let i = a.length, v: string; i-- > 0; ) {
        if ((v = a[i]).length > 1 && REG_NOT_STR.test(v)) {
          a.splice.apply(a, ([i, 1] as any).concat(v.split(REG_SEL_SPLIT).filter(Boolean)))
        }
      }
      const parent = node.parent!

      const type = a[0]
      const isAtRule = /^@/.test(type)
      const is = (node.raw = isAtRule && CONCAT_RULES.hasOwnProperty(type) ? parent.raw : [])
      const isp = parent.raw
      const tmp = node.tmp
      const cls = tmp.c

      let rule = ''
      let deep = 0
      let isAmpersand = false
      for (let i = 0, j = 0, at: string[], v: string; i < a.length; i++) {
        if ((v = a[i]) === '&') isAmpersand = true
        else if (v === '(' || v === '[') deep++
        else if (v === ')' || v === ']') deep--
        else if (REG_IS_HIDDEN_SEL.test(v))
          v = a[i] = '.' + (cls[(v = v.slice(1))] || (cls[v] = cls.id + v))
        else if (v === '*' && a[i + 1] !== '=') {
          if ((v = a[i - 1]) && REG_NOT_SYS.test(v)) a.splice(i, 0, ' '), i++
          if ((v = a[i + 1]) && REG_NOT_SYS.test(v)) a.splice(i + 1, 0, ' '), i++
          v = a[i]
        }
        if (deep === 0 && (v === ',' || i === a.length - 1)) {
          if ((at = a.slice(j, v === ',' ? i : i + 1)).length) {
            v = at[0]
            if (!isAtRule) {
              if (!isAmpersand) {
                v === ' ' || v === '>' || v === '+' || v === '~'
                  ? at.unshift('&')
                  : at.unshift('&', ' ')
              }

              const ampIds = [] as number[]
              for (let i = at.length; i-- > 0; ) if (at[i] === '&') ampIds.push(i)

              for (let i = 0, l = isp.length || 1; i < l; i++) {
                v = isp[i] || ''
                for (let i = ampIds.length; i-- > 0; ) at[ampIds[i]] = v
                if ((v = at.join('').replace(REG_TRIM_SYS, ''))) is.push(v)
              }
            } else {
              if (!rule) rule = at.slice(1).join('')
              else rule = ' (' + at.join('') + ' or' + rule + ')'
            }
          }
          j = i + 1
          isAmpersand = false
        }
      }

      node.rules = parent.rules.slice()
      if (isAtRule) {
        for (let a = node.rules, i = a.length, v; i-- > 0; ) {
          if ((v = a[i])[0] === type) {
            const v1 = v[1]
            a[i] = [type, v1 && rule ? v1 + ' and' + rule : v1 || rule]
            return
          }
        }
        node.rules.push([type, rule])
      }
    }
  }
}

export function parse(source: string, classes: { [k: string]: any }) {
  const root = new _CSSNode(TYPE_ROOT, { children: [] } as unknown as _CSSNode)
  root.all = []
  root.tmp = { r: [], l: root, c: classes }
  let NODE = new _CSSNode(TYPE_VALUE, root)

  let slash = 0

  REG_GENERAL.lastIndex = 0
  for (let m: RegExpExecArray, v: string; (m = REG_GENERAL.exec(source)!); ) {
    v = m[0]
    switch (NODE.type) {
      case TYPE_STRING:
        NODE.raw.push(v)
        if (slash < 1) {
          switch (v) {
            case '\\':
              slash = 2
              break
            case NODE.raw[0]:
              NODE = NODE.parent!
              NODE.raw.push(NODE.children.pop()!.raw.join(''))
          }
        }
        slash > 0 && slash--
        break
      case TYPE_COMMENT_LINE:
        switch (v) {
          case '\r':
          case '\n':
          case '\u2028':
          case '\u2029':
            parseComments(NODE)
            NODE = NODE.parent!
            break
          default:
            NODE.raw.push(v)
        }
        break
      case TYPE_COMMENT_BLOCK:
        switch (v) {
          case '*/':
            parseComments(NODE)
            NODE = NODE.parent!
            break
          default:
            NODE.raw.push(v)
        }
        break
      default:
        switch (v) {
          // Strings
          case '`':
          case "'":
          case '"':
            NODE = new _CSSNode(TYPE_STRING, NODE)
            NODE.raw.push(v)
            break
          // Comments
          case '//':
            NODE = new _CSSNode(TYPE_COMMENT_LINE, NODE)
            break
          case '/*':
            NODE = new _CSSNode(TYPE_COMMENT_BLOCK, NODE)
            break
          // Brackets
          case '{':
            NODE.type = TYPE_BLOCK
            parseBlocks(NODE)
            NODE = new _CSSNode(TYPE_VALUE, NODE)
            break
          case '}':
            parseValues(NODE)
            // if (NODE.raw.length) parseValues(NODE)
            // else NODE.parent!.children.pop()
            NODE = new _CSSNode(TYPE_VALUE, NODE.parent!.parent!)
            break
          case ';':
            if (NODE.raw.length) {
              parseValues(NODE)
              NODE = new _CSSNode(TYPE_VALUE, NODE.parent!)
            }
            break
          default:
            if ((v = v.trim())) NODE.raw.push(v.replace(REG_ONE_SPACE, ' '))
        }
    }
  }
  parseValues(NODE)
  for (let a = root.tmp.r, i = root.tmp.l.all!.length; i-- > 0; ) a.push('}')
  // if (NODE.raw.length) parseValues(NODE)
  // else NODE.parent!.children.pop()
  return root.tmp.r.join('')
}
// })()
