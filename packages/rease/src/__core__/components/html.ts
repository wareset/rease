import { Rease } from '../Rease'

import { noop } from '../utils/noop'
import { isString } from '../utils/is'
import { NAMESPACES_URI } from '../utils/shared'
import { get_attrs_parser } from '../utils/attrs'

//
// RText RElement
//
type Element = HTMLElement | SVGElement

function noopNull() {
  return null
}

let getParentAndBeforeNode = function () {
  return {}
} as unknown as (iam: Rease) => {
  p: Element | null | undefined
  b: Element | null | undefined | Node
}
let createText = noopNull as unknown as (
  data: any,
  parNode: Element | null | undefined,
  befNode: Element | null | undefined | Node
) => HTMLFontElement | null
let createElem = noopNull as unknown as (
  tagName: string,
  parNode: Element | null | undefined,
  befNode: Element | null | undefined | Node
) => Element | null
let DOCUMENT = {
  documentElement: null,
  head: null,
  body: null,
} as unknown as Document

const REASE_NODE_MARK = '_rease_relement_or_rtext'
const RESERVED_LOCAL_NAMES = { style: 1, script: 1 }

function removeNode(node: Node) {
  node.parentNode && node.parentNode.removeChild(node)
}

function needMovingNode(iam: Rease, rease: Rease) {
  if (iam !== rease) {
    for (; (iam = iam.parent!); ) {
      if (iam instanceof RElement) return false
      if (iam === rease) break
    }
  }
  return true
}

function insertNode(
  node: Node,
  pNode: Node | null | undefined,
  bNode: Node | null | undefined | Node,
  needRemove: boolean
) {
  // node.setAttribute('rease', '')
  // @ts-ignore
  node[REASE_NODE_MARK] = true
  if (pNode) {
    pNode.insertBefore(
      node,
      (bNode
        ? bNode.nextSibling
        : // : PORTAL_TAG_NAMES.hasOwnProperty((pNode as Element).localName)
          // ? null
          pNode.firstChild) || null
    )
  } else if (needRemove) {
    removeNode(node)
  }
}

function movingNode(this: RText | RElement, rease: Rease) {
  // if (this !== rease) {
  //   for (let parent = this as Rease; (parent = parent.parent!); ) {
  //     if (parent instanceof RElement) return
  //     if (parent === rease) break
  //   }
  // }
  if (needMovingNode(this, rease)) {
    const { p: pNode, b: bNode } = getParentAndBeforeNode(this)
    insertNode(this.node!, pNode, bNode, true)
  }
}

function deleteNode(iam: RText | RElement) {
  removeNode(iam.node!)
}

function initedNode(iam: RElement) {
  let node = iam.node! as any
  for (let a = node.childNodes, i = a.length; i-- > 0; ) {
    if (REASE_NODE_MARK in (node = a[i])) break
    else if (node.nodeType !== 1 || !RESERVED_LOCAL_NAMES.hasOwnProperty(node.localName)) {
      removeNode(node)
    }
  }
}

class _RNode_ extends Rease {}

//
// RHtml
//
function xmlDeleteNodes(iam: RHtml) {
  for (let a = iam.nodes, i = a.length; i-- > 0; ) removeNode(a[i])
  iam.nodes.length = 0
}
function xmlInsertNodes(iam: RHtml, needRecreate: boolean) {
  let { p: pNode, b: bNode } = getParentAndBeforeNode(iam)
  if (pNode) {
    const nodes = iam.nodes
    if (
      needRecreate ||
      !nodes.length ||
      !nodes[0].parentElement ||
      nodes[0].parentElement.namespaceURI !== pNode.namespaceURI
    ) {
      const clone = pNode.cloneNode(false) as Element
      xmlDeleteNodes(iam)
      clone.innerHTML = iam.data
      nodes.push.apply(nodes, clone.childNodes as any)
    }
    bNode = (bNode ? bNode.nextSibling : pNode.firstChild) || null
    for (let i = nodes.length; i-- > 0; ) {
      // @ts-ignore
      pNode.insertBefore(nodes[i], bNode), ((bNode = nodes[i])[REASE_NODE_MARK] = true)
    }
  } else {
    xmlDeleteNodes(iam)
  }
}
function xmlMovingNodes(this: RHtml, rease: Rease) {
  if (needMovingNode(this, rease)) xmlInsertNodes(this, false)
}
function xmlDataWatch(this: RHtml, data: any) {
  this.data = data = data === void 0 ? '' : '' + data
  xmlInsertNodes(this, true)
}
export class RHtml extends _RNode_ {
  data: string
  readonly nodes: Node[]

  constructor(props: { this: any }) {
    super()
    this.data = ''
    this.nodes = []
    this.watchDeep(props.this, xmlDataWatch, this)
    this.onMove(xmlMovingNodes, this)
    this.onDestroy(xmlDeleteNodes)
  }
}

//
// RText
//
function textDataWatch(this: RText, data: any): void {
  this.data = data = data === void 0 ? '' : '' + data
  const node = this.node
  if (node) {
    const text = node.childNodes.length === 1 && (node.childNodes[0] as Text)
    text && text.nodeType === 3 ? (text.data = data) : (node.textContent = data)
  }
}
export class RText extends _RNode_ {
  data: string
  readonly node: HTMLFontElement | null

  constructor(props: { this: any }) {
    super()
    const is = props.this
    if (is && (is.subscribe || is.then))
      (this.data = ''), this.watchDeep(is, textDataWatch, this)
    else this.data = is === void 0 ? '' : '' + is

    const { p: pNode, b: bNode } = getParentAndBeforeNode(this)
    if ((this.node = createText(this.data, pNode, bNode))) {
      insertNode(this.node, pNode, bNode, false)
      this.onMove(movingNode, this)
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

export class RElement extends _RNode_ {
  readonly type: string
  readonly node: Element | null
  _attrs: { [key: string]: any }
  _class?: { [key: string]: any }
  _style?: { [key: string]: any }
  _unevt?: (() => void)[]

  constructor(props: { this: string | Element | null; children?: any; [k: string]: any }) {
    super()
    let type: string
    let is = props.this
    let afterInsert = noop as typeof initedNode
    isString(is) ? ((type = is), (is = null)) : (type = is ? is.localName : '')

    switch ((this.type = type || (type = 'template'))) {
      case 'html':
        this.node = (is as any) || DOCUMENT.documentElement
        break
      case 'head':
        this.node = (is as any) || DOCUMENT.head
        break
      case 'body':
        this.node = (is as any) || DOCUMENT.body
        break
      default: {
        const { p: pNode, b: bNode } = getParentAndBeforeNode(this)
        if ((this.node = (is as any) || createElem(type, pNode, bNode))) {
          insertNode(this.node, pNode, bNode, false)
          this.onMove(movingNode, this)
          this.onDestroy(deleteNode)
          afterInsert = initedNode
          // 'innerText' in props || 'innerHTML' in props
          //   ? (this.node.innerHTML = '')
          //   : (afterInsert = initedNode)
        }
      }
    }

    this._attrs = {}
    for (const k in props) {
      if (this.destroyed) break
      if (k !== 'this' && k !== 'children') get_attrs_parser(this, props[k], k)
    }

    this.insert(props.children)
    afterInsert(this)
  }
}

if (typeof document !== 'undefined') {
  DOCUMENT = document

  const PORTAL_TAG_NAMES = { html: 1, head: 1, body: 1 }

  // const BEFORE_CLASSES = [RElement, RText]
  getParentAndBeforeNode = function (iam) {
    let pNode: Element | undefined, bNode: Element | undefined
    let { parent, prev } = iam.findParentOrPrev(
      RElement,
      _RNode_ as unknown as (typeof RElement | typeof RText | typeof RHtml)[]
    )

    if (prev) {
      bNode = 'node' in prev ? prev.node! : (prev.nodes[0] as Element)
      if (!bNode || PORTAL_TAG_NAMES.hasOwnProperty(bNode.localName)) {
        return getParentAndBeforeNode(prev)
      }
      if ((parent = prev.findParent(RElement))) {
        pNode = parent.node!
        for (; bNode && bNode.parentNode !== pNode; ) {
          bNode = bNode.parentNode as Element
        }
        if (!bNode) {
          return getParentAndBeforeNode(prev)
        }
      }
    } else if (parent) {
      pNode = parent.node!
    }
    return { p: pNode, b: bNode }
  }

  function createElementNS(tagName: string, pNode: any) {
    return DOCUMENT.createElementNS(
      NAMESPACES_URI.hasOwnProperty(tagName)
        ? NAMESPACES_URI[tagName as 'svg']
        : (pNode && pNode.localName !== 'foreignObject' ? pNode : DOCUMENT.documentElement)
            .namespaceURI,
      tagName
    ) as Element
  }
  createText = function (data, pNode, bNode) {
    const font = createElementNS('font', pNode) as HTMLFontElement
    font.style.verticalAlign = 'inherit'
    // ;(bNode = bNode ? bNode.nextSibling : pNode && pNode.firstChild) &&
    // bNode.nodeType === 3 &&
    // !(REASE_NODE_MARK in bNode)
    //   ? (((bNode as Text).data = data), font.appendChild(bNode))
    //   : (font.textContent = data)

    font.appendChild(
      (bNode = bNode ? bNode.nextSibling : pNode && pNode.firstChild) &&
        bNode.nodeType === 3 &&
        !(REASE_NODE_MARK in bNode)
        ? (((bNode as Text).data = data), bNode)
        : DOCUMENT.createTextNode(data)
    )
    return font
  }
  createElem = function (tagName, pNode, bNode) {
    if ((bNode = bNode ? bNode.nextSibling : pNode && pNode.firstChild)) {
      let node: any
      for (; bNode && !(REASE_NODE_MARK in bNode); ) {
        node = bNode
        bNode = bNode.nextSibling
        if (node.nodeType !== 1) {
          removeNode(node)
        } else if (node.localName === tagName) {
          for (let a = node.attributes, i = a.length; i-- > 0; ) {
            node.removeAttribute(a[i].name)
          }
          // node.setAttribute('rease-hydro', '')
          return node
        }
        // else if (!RESERVED_LOCAL_NAMES.hasOwnProperty(node.localName)) {
        //   break
        // }
      }
    }
    // console.log('create: ' + tagName)
    return createElementNS(tagName, pNode)
  }
}
