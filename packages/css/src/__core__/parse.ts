import { PROPERTIES } from './init'

type Classes = { id: string; [k: string]: any }
type Context = { r: string[]; l: CSSNode }
type CSSNode = {
  type?: string
  raw: string[]
  rules: [string, ' ', string[]][]
  all: string[] | null

  is: boolean

  parent: CSSNode
  children: CSSNode[]
}

// const DEEPED_RULES = {
//   __proto__: null,
//   '@container': 1,
//   '@document': 1,
//   '@layer': 1,
//   '@media': 1,
//   '@scope': 1,
//   '@starting-style': 1,
//   '@supports': 1,
// }
const CONCAT_RULES = {
  __proto__: null,
  '@layer': 1,
  '@media': 1,
  '@supports': 1,
}

// const TYPE_ROOT = 'ROOT'
// const TYPE_PROPERTY = 'PROPERTY'
// const TYPE_AT_RULE = 'AT_RULE'
// const TYPE_SELECTOR = 'SELECTOR'

function createCSSNode(parent: CSSNode) {
  const NODE: CSSNode = {
    raw: [],
    rules: [],
    all: null,
    is: false,
    parent,
    children: [],
  }
  parent.children.push(NODE)
  return NODE
}

// \/\/[^\r\n\u2028\u2029]*|
const REG_HEAD =
  /(('|")(?:[^\\]|\\.?)*?)(?:\2|$)|(\/\*[^]*?(?:\*\/|$))|((?:[^\\'"/{};]+|\\.?|\/(?![*]))+)|./g

export function parse(source: string, classes: Classes) {
  const root = createCSSNode({ children: [] } as any)
  // root.type = TYPE_ROOT
  root.all = []
  root.raw[0] = ''
  REG_HEAD.lastIndex = 0
  const ctx: Context = { r: [], l: root }
  let PARENT = root
  let NODE!: CSSNode | null // = createCSSNode(TYPE_VALUE, root)

  let v: string
  let match: RegExpExecArray | null
  for (; (match = REG_HEAD.exec(source)); ) {
    // console.log(match)
    switch (false) {
      // other
      case !match[4]:
        if ((v = match[4].trim())) {
          // console.log('other:', v)
          NODE || (NODE = createCSSNode(PARENT))
          NODE.raw.push(v)
        }
        break
      // string
      case !match[1]:
        // console.log('string:', match[1])
        NODE || (NODE = createCSSNode(PARENT))
        NODE.raw.push(match[1], match[2])
        break
      // comment
      case !match[3]:
        // console.log('comment:', match[3])
        break
      default:
        switch (match[0]) {
          case ';':
            if (NODE) {
              parseProperty(NODE, ctx)
              PARENT = NODE.parent
            }
            break
          case '}':
            if (NODE) {
              parseProperty(NODE, ctx)
            }
            PARENT = PARENT.parent
            break
          case '{':
            if (NODE) {
              NODE.raw[0][0] === '@'
                ? parseAtRule(NODE)
                : parseSelector(NODE, classes)
            } else {
              NODE = createCSSNode(PARENT)
              NODE.raw[0] = '*'
              parseSelector(NODE, classes)
            }
            PARENT = NODE
            break
          default:
            throw match[0]
        }
        NODE = null
    }
  }
  if (NODE) parseProperty(NODE, ctx)
  for (let a = ctx.r, i = removeSemi(ctx.r, ctx.l.all!.length, 0); i-- > 0; ) {
    a.push('}')
  }

  // console.log(root)
  // console.log(ctx)
  return ctx.r.join('')
}

function removeSemi(list: string[], from: number, to: number) {
  if (from > to) {
    const l = list.length - 1
    if (list[l] === ';') list.length = l
  }
  return from
}

const REG_FOR_ANDOR = /\)([a-z]+)\s*\(/g
const REG_FOR_EQUAL = /(\[|\]|[<>=]=?)/g
const REG_FOR_SPACE = /(\))\s*|\s+/g
const REG_FOR_VALUE = /([.#(\[])\s+|\s+([%)\]]|$)|\s*([,:*/!])\s*/g
const REG_FOR_CALCS = /([%.\da-z)\]])([-+])\s*([.\d(\[]|var\()/gi
function replaceRawProperty(v: string) {
  return v[0] !== "'" && v[0] !== '"'
    ? v
        .replace(REG_FOR_ANDOR, ') $1 (')
        .replace(REG_FOR_EQUAL, ' $1 ')
        .replace(REG_FOR_SPACE, '$1 ')
        .replace(REG_FOR_VALUE, '$1$2$3')
        .replace(REG_FOR_CALCS, '$1 $2 $3')
    : v
}
const REG_FOR_PROP = /^[-a-z]+/i
function parseProperty(node: CSSNode, ctx: Context) {
  // node.type = TYPE_PROPERTY
  // console.log([...node.raw])
  let attr = node.raw.map(replaceRawProperty).join('')
  const matchForProp = attr.match(REG_FOR_PROP)
  if (matchForProp) {
    const oldProp = matchForProp[0]
    const newProp = PROPERTIES[oldProp]
    if (newProp && newProp !== oldProp) {
      attr += ';' + newProp + attr.slice(oldProp.length)
    }
  }

  const result = ctx.r
  const lastAll = ctx.l.all!

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
    for (let l = removeSemi(result, lastAll.length, j); l-- > j; )
      result.push('}')
    for (; j < l; j++) result.push(all[j], '{')
  }

  result.push(attr, ';')
  ctx.l = node
}

const REG_FOR_AT_RULE_TYPE = /^(@[^\s(\[]*)\s*/
const REG_FOR_AT_RULE_SPLIT_RULES = /([,()\[\]]|\sor\s)/
function parseAtRule(node: CSSNode) {
  // node.type = TYPE_AT_RULE
  const raw = node.raw
  const typeMatch = raw[0].split(REG_FOR_AT_RULE_TYPE)
  const type = typeMatch[1]

  for (let i = ((raw[0] = typeMatch[2]), raw.length), v: string; i-- > 0; ) {
    v = raw[i]
    if (v[0] !== "'" && v[0] !== '"') {
      raw.splice.apply(
        raw,
        ([i, 1] as any).concat(
          v
            .replace(REG_FOR_ANDOR, ') $1 (')
            .replace(REG_FOR_EQUAL, ' $1 ')
            .replace(REG_FOR_SPACE, '$1 ')
            .replace(REG_FOR_VALUE, '$1$2$3')
            .replace(REG_FOR_CALCS, '$1 $2 $3')
            .split(REG_FOR_AT_RULE_SPLIT_RULES)
          // .filter(Boolean)
        )
      )
    }
  }

  const rule: string[] = []
  for (let i = 0, j = 0, l = raw.length - 1, deep = 0, v: string; i <= l; ++i) {
    v = raw[i]
    if (v === '(' || v === '[') deep++
    else if (v === ')' || v === ']') deep--
    else if (deep === 0 && v === ' or ') v = raw[i] = ','

    if (deep === 0 && (v === ',' || i === l)) {
      v = raw.slice(j, i === l ? i + 1 : ((j = i + 1), i)).join('')
      if (v.length) rule.push(v)
    }
  }

  // console.log(raw)
  // console.log(rule)
  const rules = (node.rules = node.parent.rules.slice())
  node.raw = node.parent.raw // type in DEEPED_RULES ? node.parent.raw : []
  if (type in CONCAT_RULES)
    for (let i = rules.length, v: string[], d: string; i-- > 0; ) {
      if (rules[i][0] === type) {
        v = rules[i][2]
        const res: string[] = []
        for (let i = 0, il = v.length; i < il; ++i) {
          for (let j = 0, jl = rule.length; j < jl; ++j) {
            switch (type) {
              case '@layer':
                d = '.'
                break
              default:
                d = ' and '
            }

            res.push(v[i] + d + rule[j])
          }
        }
        // if (i === rules.length - 1) {
        rules[i] = [type, ' ', res]
        // } else {
        //   rules.splice(i, 1)
        //   rules.push([type, ' ', res])
        // }
        return
      }
    }
  rules.push([type, ' ', rule])
}
// \s>+~^|=
const REG_TRIM_SYS = /^[\s>+~]+|[\s>+~]+$/g
const REG_FOR_SPLIT_SELECTOR =
  /(&|\\.)|([.#:(\[])\s*|\s*([)\]])|\s*([,\s>+~|=]|[*$^]\s*=)\s*/g
const REG_FOR_CLASS = /^[^\s>+~|.:,(\[]/
function parseSelector(node: CSSNode, cls: Classes) {
  // node.type = TYPE_SELECTOR
  const raw = node.raw
  // console.log([...raw])
  for (let i = raw.length, v: string; i-- > 0; ) {
    v = raw[i]
    if (v[0] !== "'" && v[0] !== '"') {
      raw.splice.apply(
        raw,
        ([i, 1] as any).concat(v.split(REG_FOR_SPLIT_SELECTOR).filter(Boolean))
      )
    }
  }

  // console.log(raw)
  // console.log(raw.join(''))
  const clsId = cls.id
  const newRaw: string[] = (node.raw = [])
  const parentRaw = node.parent.raw
  let isAmpersand = false
  for (let i = 0, j = 0, l = raw.length - 1, deep = 0, v: string; i <= l; ++i) {
    v = raw[i]
    if (v === '&') isAmpersand = true
    else if (v === '(' || v === '[') deep++
    else if (v === ')' || v === ']') deep--
    else if (v === '.' && raw[i + 1][0] === '_') {
      const cnList: string[] = []
      for (let j = i, v; (v = raw[++j]) && REG_FOR_CLASS.test(v); ) {
        cnList.push(v)
      }
      const cn = cnList.join('')
      cls[cn] || (cls[cn] = clsId + cn)
      raw[i] += clsId
      // console.log(1, raw)
      // console.log(2, cn)
    }

    if (deep === 0 && (v === ',' || i === l)) {
      const sel = raw.slice(j, i === l ? i + 1 : ((j = i + 1), i))
      // console.log(sel.join(''))

      const ampIds = [] as number[]
      if (isAmpersand) {
        isAmpersand = false
        for (let i = sel.length; i-- > 0; ) if (sel[i] === '&') ampIds.push(i)
      } else {
        v = sel[0]
        v === ' ' || v === '>' || v === '+' || v === '~'
          ? sel.unshift('&')
          : sel.unshift('&', ' ')
        ampIds[0] = 0
      }

      for (let i = 0, l = parentRaw.length; i < l; ++i) {
        v = parentRaw[i]
        for (let i = ampIds.length; i-- > 0; ) sel[ampIds[i]] = v
        if ((v = sel.join('').replace(REG_TRIM_SYS, ''))) newRaw.push(v)
      }
    }
  }

  // console.log(newRaw)
  node.rules = node.parent.rules.slice()
}