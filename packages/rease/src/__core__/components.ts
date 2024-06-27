import { Rease } from '.'

import { noop } from '.'
import { isString } from '.'
import { isArray } from '.'
import { NAMESPACES_URI } from '.'
import { get_attrs_parser } from '.'
import { hasOwn, is as objectIs, keys } from '.'

//
// RMove
//
function _move(this: any, a: any[]) {
  let { 0: to, 1: index } = a
  to || (to = this.p)
  this.r.move(to, index)
  this.c === void 0 || (this.r.insert(this.c), (this.c = void 0))
}
export class RMove extends Rease {
  constructor({ is, index, children }: { is: any; index?: any; children?: any }) {
    // @ts-ignore
    super()
    this.watchDeepAll([is, index], _move, { r: this, p: this.parent, c: children })
  }
}

//
// RText RElement
//
type Element = HTMLElement | SVGElement

function noopNull() {
  return null
}

let get_parent_and_before_node = function () {
  return {}
} as unknown as (iam: RText | RElement) => {
  p: Element | null | undefined
  b: Element | Text | null | undefined
}
let createText = noopNull as unknown as (
  data: any,
  parNode: Element | null | undefined,
  befNode: any
) => HTMLFormElement | null
let createElem = noopNull as unknown as (
  tagName: string,
  parNode: Element | null | undefined,
  befNode: any
) => Element | null
let insertNode = noop as unknown as (
  node: Node,
  parNode: Node | null | undefined,
  befNode: Node | null | undefined
) => void
let deleteNode = noop as unknown as (iam: RText | RElement) => void
let movingNode = noop as unknown as (iam: RText | RElement) => void
let initedNode = noop as unknown as (iam: RText | RElement) => void
let DOCUMENT = {} as Document
if (typeof document !== 'undefined') {
  DOCUMENT = document

  const REASE_NODE_MARK = '_rease_relement_or_rtext'
  const RESERVED_LOCAL_NAMES = { style: 1, script: 1 }
  function removeNode(node: Node) {
    node.parentNode && node.parentNode.removeChild(node)
  }

  get_parent_and_before_node = function (iam) {
    const { parent, prev } = iam.findParentOrPrev(RElement, [RElement, RText])
    const befNode = prev && prev.node
    const parNode = (befNode && befNode.parentElement) || (parent && parent.node)
    return { p: parNode, b: befNode }
  }

  function createElementNS(tagName: string, parNode: any) {
    return document.createElementNS(
      NAMESPACES_URI.hasOwnProperty(tagName)
        ? NAMESPACES_URI[tagName as 'svg']
        : (parNode && parNode.localName !== 'foreignObject' ? parNode : document.documentElement)
            .namespaceURI,
      tagName
    ) as Element
  }
  createText = function (data, parNode, befNode) {
    if ((befNode = befNode ? befNode.nextSibling : parNode && parNode.firstChild)) {
      if (befNode.nodeType === 3 && !(REASE_NODE_MARK in befNode)) removeNode(befNode)
    }
    // return document.createTextNode(data)
    befNode = createElementNS('font', parNode)
    befNode.style.verticalAlign = 'inherit'
    befNode.textContent = data
    return befNode
  }
  createElem = function (tagName, parNode, befNode) {
    if (tagName) {
      if ((befNode = befNode ? befNode.nextSibling : parNode && parNode.firstChild)) {
        let node: any
        for (; befNode && !(REASE_NODE_MARK in befNode); ) {
          node = befNode
          befNode = befNode.nextSibling
          if (node.nodeType !== 1) {
            removeNode(node)
          } else if (node.localName === tagName) {
            for (let a = node.attributes, i = a.length; i-- > 0; ) {
              node.removeAttribute(a[i].name)
            }
            // node.setAttribute('rease-hydro', true)
            return node
          } else if (!RESERVED_LOCAL_NAMES.hasOwnProperty(node.localName)) {
            break
          }
        }
      }
      // console.log('create: ' + tagName)
      return createElementNS(tagName, parNode)
    }
    return null
  }
  insertNode = function (node, parNode, befNode) {
    // node.setAttribute('rease', true)
    // @ts-ignore
    node[REASE_NODE_MARK] = true
    parNode &&
      parNode.insertBefore(node, (befNode ? befNode.nextSibling : parNode.firstChild) || null)
  }
  deleteNode = function (iam) {
    const node = iam.node
    node && removeNode(node)
  }
  movingNode = function (iam) {
    const node = iam.node
    if (node) {
      const { p: parNode, b: befNode } = get_parent_and_before_node(iam)
      if (parNode) insertNode(node, parNode, befNode)
      else deleteNode(iam)
    }
  }
  initedNode = function (iam) {
    let node = iam.node!
    if (node)
      for (let a = node.childNodes, i = a.length; i-- > 0; ) {
        if (REASE_NODE_MARK in (node = a[i] as any)) break
        else if (node.nodeType !== 1 || !RESERVED_LOCAL_NAMES.hasOwnProperty(node.localName)) {
          removeNode(node)
        }
      }
  }
}

//
// RText
//
function textDataWatch(this: RText, data: any): void {
  this._data = data = data === void 0 ? '' : '' + data
  this.node && (this.node.textContent = data)
}
export class RText extends Rease {
  _data: string
  node: HTMLFormElement | null

  constructor({ data: is }: { data: any }) {
    super()

    if (is && (is.subscribe || is.then)) (this._data = ''), this.watchDeep(is, textDataWatch, this)
    else this._data = is === void 0 ? '' : '' + is

    const { p: parNode, b: befNode } = get_parent_and_before_node(this)
    if ((this.node = createText(this._data, parNode, befNode))) {
      insertNode(this.node, parNode, befNode)
      this.onMove(movingNode)
      this.onDestroy(deleteNode)
    }
  }
}

//
// RElement
//
// const xmlnsWatch = function (this: any, xmlns: any) {
//   if (this.attrs) throw { xmlns: this }
//   if (xmlns && typeof xmlns === 'string') this.xmlns = xmlns
// }

// import type { IRElementProps } from '@rease/jsxtype'

export class RElement extends Rease {
  localName: string
  node: Element | null
  _attrs: { [key: string]: any }
  _class?: { [key: string]: any }
  _style?: { [key: string]: any }
  _unevt?: (() => void)[]

  constructor({ children, node, ...props }: { node: string | Element | null; [k: string]: any }) {
    // constructor({ children, node, ...props }: IRElementProps & { children?: any }) {
    super()
    let type: string
    let afterInsert = noop as typeof initedNode
    if (isString(node)) (type = node), (node = null as any)
    else type = node ? node.localName : ''

    switch ((this.localName = type || (type = 'template'))) {
      case 'html':
        this.node = (node as Element) || DOCUMENT.documentElement
        break
      case 'head':
        this.node = (node as Element) || DOCUMENT.head
        break
      case 'body':
        this.node = (node as Element) || DOCUMENT.body
        break
      default: {
        const { p: parNode, b: befNode } = get_parent_and_before_node(this)
        if ((this.node = (node as any) || (node = createElem(type, parNode, befNode)))) {
          insertNode(node as Element, parNode, befNode)
          afterInsert = initedNode
          this.onMove(movingNode)
          this.onDestroy(deleteNode)
        }
      }
    }

    this._attrs = {}
    // @ts-ignore
    for (const k in props) {
      if (this.destroyed) break
      else get_attrs_parser(this, (props as any)[k], k)
    }

    this.insert(children)
    afterInsert(this)
  }
}

//
// RFragment
//
export class RFragment extends Rease {
  constructor({ children }: { children?: any }) {
    super()
    this.insert(children)
  }
}
// export function RFragment(this: Rease, { children }: { children?: any }) {
//   return children
// }

//
// RWatch
//
function watch_subscribe(this: { r: Rease; c: any }) {
  this.r.destroyChildren(), this.r.insert(this.c)
}
export class RWatch extends Rease {
  constructor({ children, is }: { children?: any; is: any }) {
    super()
    // @ts-ignore
    this[isArray(is) ? 'watchDeepAll' : 'watchDeep'](is, watch_subscribe, {
      r: this,
      c: children
    })
  }
}
// export function RWatch(this: Rease, { children, is }: { children?: any; is: any }) {
//   //@ts-ignore
//   this[isArray(is) ? 'watchDeepAll' : 'watchDeep'](is, watch_subscribe, {
//     r: this,
//     c: children
//   })
// }

//
// RIf RElseIf RElse
//
function ifelseif_every(v: any, k: number): any {
  return k > 0 ? !v : v
}
function ifelseif_subscribe(this: { r: Rease; b: boolean; c: any }, a: any[]) {
  if (this.b !== (this.b = a.every(ifelseif_every))) {
    this.b ? this.r.insert(this.c) : this.r.destroyChildren()
  }
}
function ifelseif(iam: Rease, children: any, a: any[]) {
  if (iam.parent) iam.parent._.if = a
  iam.watchDeepAll(a, ifelseif_subscribe, { r: iam, b: false, c: children })
}
export class RIf extends Rease {
  constructor({ children, is }: { children?: any; is: any }) {
    super()
    ifelseif(this, children, [is])
  }
}
// export function RIf(this: Rease, { children, is }: { children?: any; is: any }) {
//   ifelseif(this, children, [is])
// }
export class RElseIf extends Rease {
  constructor({ children, is }: { children?: any; is: any }) {
    super()
    ifelseif(this, children, [is].concat(this.parent ? this.parent._.if : []))
  }
}
// export function RElseIf(this: Rease, { children, is }: { children?: any; is: any }) {
//   ifelseif(this, children, [is].concat(this.parent ? this.parent._.if : []))
// }
export class RElse extends Rease {
  constructor({ children }: { children?: any }) {
    super()
    ifelseif(this, children, [true].concat(this.parent ? this.parent._.if : []))
  }
}
// export function RElse(this: Rease, { children }: { children?: any }) {
//   ifelseif(this, children, [true].concat(this.parent ? this.parent._.if : []))
// }

//
// RSwitch RCase
//
export class RSwitch extends Rease {
  _is: any
  constructor({ children, is }: { children?: any; is: any }) {
    super()
    this._is = is
    this.insert(children)
  }
}
// export function RSwitch(this: Rease, { is, children }: { is: any; children?: any }) {
//   this.shared.is = is
//   return children
// }
// const SWITCH_ARR = [RSwitch]
function _switch_watch(this: RCase['_ctx'], a: any[]) {
  this.i = true
  if (this.b !== (this.b = objectIs(a[0], a[1]))) {
    this.b ? this.r.insert(this.c) : this.r.destroyChildren()
  }
}
function _switch_move(iam: RCase) {
  const { _is, _ctx } = iam
  const parent = iam.findParent(RSwitch)
  ;(_ctx.i = false), _ctx.u()
  if (parent) _ctx.u = iam.watchDeepAll([parent._is, _is], _switch_watch, _ctx)
  if (!_ctx.i && _ctx.b) (_ctx.b = false), iam.destroyChildren()
}
export class RCase extends Rease {
  _is: any
  _ctx: { r: RCase; b: boolean; c: any; i?: any; u: typeof noop }
  constructor({ children, is }: { children?: any; is: any }) {
    // @ts-ignore
    super()
    this._is = is
    this._ctx = { r: this, b: false, c: children, i: false, u: noop }
    this.onMove(_switch_move), _switch_move(this)

    // const parent = this.findParent(SWITCH_ARR)
    // if (parent) {
    //   this.watchDeepAll([parent.shared.is, is], _switch_watch, { r: this, b: false, c: children })
    // }
  }
}
// export function RCase(this: Rease, { is, children }: { is: any; children?: any }) {
//   const shared = this.shared
//   ;(shared.is = is), (shared.ctx = { r: this, b: false, c: children, i: false, u: noop })
//   _switch_move(this), this.onMove(_switch_move)

//   // const parent = this.findParent(SWITCH_ARR)
//   // if (parent) {
//   //   this.watchDeepAll([parent.shared.is, is], _switch_watch, { r: this, b: false, c: children })
//   // }
// }

//
// RForIn
//
function _forIn(this: [iam: RForIn, children: any, old: any], is: any) {
  const { 0: iam, 1: cb, 2: old } = this
  const now = {} as any
  this[2] = now
  if (!(is = is[0])) {
    iam.destroyChildren()
  } else {
    const children = iam.children
    let last = 0
    let v: any, tmp: any
    for (const k in is) {
      if (iam.destroyed) return
      if (hasOwn(is, k)) {
        v = is[k]
        if (hasOwn(old, k) && objectIs((tmp = old[k])[0], v)) {
          v = (now[k] = tmp)[1]
          delete old[k]
        } else {
          now[k] = [v, (v = iam.insert(cb(v, k, is), last))]
        }
        if (v.length && (v = children.lastIndexOf(v[v.length - 1])) > -1) last = v + 1
      }
    }
    for (let o = keys(old), j = o.length; j-- > 0; )
      for (let a = old[o[j]][1], i = a.length; i-- > 0; ) a[i].destroy()
  }
}
export class RForIn extends Rease {
  constructor({
    is,
    watch,
    children
  }: {
    is: any
    watch?: any
    children: (v: any, k: string, a: any) => any
  }) {
    super()
    this.watchDeepAll([is, watch], _forIn, [this, children, {}])
  }
}
// export function RForIn(
//   this: Rease,
//   { is, watch, children }: { is: any; watch?: any; children: (v: any, k: string, a: any) => any }
// ) {
//   this.watchDeepAll([is, watch], _forIn, [this, children, {}])
// }

//
// RForOf
//
function _indexForOf(a: any[], v: any, from: number) {
  for (let i = from, l = a.length; i < l; i++) if (objectIs(a[i], v)) return i
  return -1
}
function _forOf(this: [iam: RForOf, children: any, oldV: any[], oldR: any[]], is: any) {
  const { 0: iam, 1: cb, 2: oldV, 3: oldR } = this
  const nowV = [] as any[]
  const nowR = [] as any[]
  this[2] = nowV
  this[3] = nowR
  if (!(is = is[0])) {
    iam.destroyChildren()
  } else {
    const children = iam.children
    let last = 0
    let from = 0
    let idx: number
    let v: any
    for (const k in is) {
      if (iam.destroyed) return
      if (hasOwn(is, k)) {
        nowV.push((v = is[k]))
        if ((idx = _indexForOf(oldV, v, from)) > -1) {
          nowR.push((v = oldR[idx])), (oldR[idx] = oldR), (from = idx + 1)
        } else {
          nowR.push((v = iam.insert(cb(v, '' + (idx = +k) === k ? idx : k, is), last)))
        }
        if (v.length && (v = children.lastIndexOf(v[v.length - 1])) > -1) last = v + 1
      }
    }
    for (let i = oldR.length, a; i-- > 0; )
      if ((a = oldR[i]) !== oldR) for (let i = a.length; i-- > 0; ) a[i].destroy()
  }
}
export class RForOf extends Rease {
  _is: any
  constructor({
    is,
    watch,
    children
  }: {
    is: any
    watch?: any
    children: (v: any, k: string | number, a: any) => any
  }) {
    super()
    this.watchDeepAll([is, watch], _forOf, [this, children, [], []])
  }
}
// export function RForOf(
//   this: Rease,
//   {
//     is,
//     watch,
//     children
//   }: { is: any; watch?: any; children: (v: any, k: string | number, a: any) => any }
// ) {
//   this.watchDeepAll([is, watch], _forOf, [this, children, [], []])
// }
