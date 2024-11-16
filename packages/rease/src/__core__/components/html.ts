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
) => HTMLFontElement | null
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
let initedNode = noop as unknown as (iam: RText | RElement) => void
let movingNode = noop as unknown as (this: RText | RElement, rease: Rease) => void
let DOCUMENT = {} as Document

// class _RHTML_ extends Rease {
//   protected _isMoveAndDelete?: boolean
//   declare node: Element | null

//   override hookOnMove(rease: Rease) {
//     this._isMoveAndDelete && movingNode.call(this, rease)
//   }
//   override hookOnDestroy() {
//     this._isMoveAndDelete && deleteNode(this)
//   }
// }

//
// RText
//
function textDataWatch(this: RText, data: any): void {
  this._is = data = data === void 0 ? '' : '' + data
  const text = this.text
  text && (text.data = data)
  // node && (node.textContent = data)
  // if (node) {
  //   const textNode = node.childNodes[0] as Text
  //   textNode ? (textNode.data = data) : (node.textContent = data)
  // }
}
export class RText extends Rease {
  _is: string
  declare node: HTMLFontElement | null
  text: Text | null

  constructor({ is }: { is: any }) {
    super()

    if (is && (is.subscribe || is.then))
      (this._is = ''), this.watchDeep(is, textDataWatch, this)
    else this._is = is === void 0 ? '' : '' + is

    const { p: parNode, b: befNode } = get_parent_and_before_node(this)
    if ((this.node = createText(this._is, parNode, befNode))) {
      insertNode(this.node, parNode, befNode)
      this.text = this.node.childNodes[0] as Text
      this.onMove(movingNode, this)
      this.onDestroy(deleteNode)
      // this._isMoveAndDelete = true
    } else {
      this.text = null
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
  name: string
  declare node: Element | null
  _attrs: { [key: string]: any }
  _class?: { [key: string]: any }
  _style?: { [key: string]: any }
  _unevt?: (() => void)[]

  constructor({ children, is, ...props }: { is: string | Element | null; [k: string]: any }) {
    // constructor({ children, node, ...props }: IRElementProps & { children?: any }) {
    super()
    let type: string
    let afterInsert = noop as typeof initedNode
    isString(is) ? ((type = is), (is = null)) : (type = is ? is.localName : '')

    switch ((this.name = type || (type = 'template'))) {
      case 'html':
        this.node = (is as Element) || DOCUMENT.documentElement || null
        break
      case 'head':
        this.node = (is as Element) || DOCUMENT.head || null
        break
      case 'body':
        this.node = (is as Element) || DOCUMENT.body || null
        break
      default: {
        const { p: parNode, b: befNode } = get_parent_and_before_node(this)
        if ((this.node = (is as any) || createElem(type, parNode, befNode))) {
          insertNode(this.node, parNode, befNode)
          this.onMove(movingNode, this)
          this.onDestroy(deleteNode)
          // this._isMoveAndDelete = true
          afterInsert = initedNode
        }
      }
    }

    this._attrs = {}
    // @ts-ignore
    for (const k in props) {
      if (this.destroyed) break
      get_attrs_parser(this, (props as any)[k], k)
    }

    this.insert(children)
    afterInsert(this)
  }
}

if (typeof document !== 'undefined') {
  DOCUMENT = document

  const REASE_NODE_MARK = '_rease_relement_or_rtext'
  const RESERVED_LOCAL_NAMES = { style: 1, script: 1 }
  function removeNode(node: Node) {
    node.parentNode && node.parentNode.removeChild(node)
  }

  const BEFORE_CLASSES = [RElement, RText]
  get_parent_and_before_node = function (iam) {
    const { parent, prev } = iam.findParentOrPrev(RElement, BEFORE_CLASSES)
    const befNode = prev && prev.node
    const parNode = (befNode && befNode.parentElement) || (parent && parent.node)
    return { p: parNode, b: befNode }
  }

  function createElementNS(tagName: string, parNode: any) {
    return DOCUMENT.createElementNS(
      NAMESPACES_URI.hasOwnProperty(tagName)
        ? NAMESPACES_URI[tagName as 'svg']
        : (parNode && parNode.localName !== 'foreignObject'
            ? parNode
            : DOCUMENT.documentElement
          ).namespaceURI,
      tagName
    ) as Element
  }
  createText = function (data, parNode, befNode) {
    if ((befNode = befNode ? befNode.nextSibling : parNode && parNode.firstChild)) {
      if (befNode.nodeType === 3 && !(REASE_NODE_MARK in befNode)) removeNode(befNode)
    }
    // return DOCUMENT.createTextNode(data)
    befNode = createElementNS('font', parNode)
    befNode.style.verticalAlign = 'inherit'
    befNode.appendChild(DOCUMENT.createTextNode(data))
    // befNode.textContent = data
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
    // if (parNode) {
    //   befNode = (befNode ? befNode.nextSibling : parNode.firstChild) || null
    //   if (parNode !== node.parentNode || befNode !== node.nextSibling)
    //     parNode.insertBefore(node, befNode)
    // }
    if (parNode) {
      parNode.insertBefore(node, (befNode ? befNode.nextSibling : parNode.firstChild) || null)
    } else {
      removeNode(node)
    }
  }
  movingNode = function (this, rease) {
    let node = this.node
    if (node) {
      if (this !== rease) {
        for (let parent = this as Rease; (parent = parent.parent!); ) {
          if (parent instanceof RElement) return
          if (parent === rease) break
        }
      }

      const { p: parNode, b: befNode } = get_parent_and_before_node(this)
      insertNode(node, parNode, befNode)
    }
  }
  deleteNode = function (iam) {
    let node = iam.node
    node && removeNode(node)
  }
  initedNode = function (iam) {
    let node = iam.node!
    if (node) {
      for (let a = node.childNodes, i = a.length; i-- > 0; ) {
        if (REASE_NODE_MARK in (node = a[i] as any)) break
        else if (node.nodeType !== 1 || !RESERVED_LOCAL_NAMES.hasOwnProperty(node.localName)) {
          removeNode(node)
        }
      }
    }
  }
}
