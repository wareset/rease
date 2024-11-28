import type { RElement } from '../components'
import { NAMESPACES_URI } from './shared'
import { noop } from './noop'
import { hasOwn, getPrototypeOf, getOwnPropertyDescriptor } from './object'
import { listen } from '@rease/listen'
import { _cssInit, _cssProperties } from '@rease/css'

import { isArray } from './array'

export const get_attrs_parser = (function () {
  type Element = HTMLElement | SVGElement

  function class_parser(v: any): string {
    switch (typeof v) {
      case 'string':
        return v
      case 'object': {
        const a: string[] = []
        if (isArray(v)) {
          for (let c: string, i = 0; i < v.length; i++) {
            if ((c = class_parser(v[i]))) a.push(c)
          }
        } else if (v) {
          for (const k in v) if (v[k]) a.push(k)
        }
        return a.join(' ')
      }
      default:
        return ''
    }
  }

  const REG_DASH = /([A-Z])/g
  const _C2D: { [key: string]: string } = {}
  let camel2dash = function (v: string): string {
    return (
      _cssInit(),
      (camel2dash = function (v: string): string {
        return v[0] === '-'
          ? v
          : hasOwn(
              _cssProperties,
              (v = hasOwn(_C2D, v)
                ? _C2D[v]
                : (_C2D[v] = v.replace(REG_DASH, '-$1').toLowerCase()))
            )
          ? _cssProperties[v]
          : v
      })(v)
    )
  }

  function style_parser(v: any): string {
    switch (typeof v) {
      case 'string':
        return v
      case 'object': {
        const a: string[] = []
        if (isArray(v)) {
          for (let c: string, i = 0; i < v.length; i++) {
            if ((c = style_parser(v[i]))) a.push(c[c.length - 1] === ';' ? c.slice(0, -1) : c)
          }
        } else if (v) {
          for (const k in v) {
            if (v[k] != null) a.push(camel2dash(k) + ':' + v[k])
          }
        }
        return a.join(';')
      }
      default:
        return ''
    }
  }

  function is(v: any) {
    // (typeof v === 'string' && v !== '') || typeof v === 'number' || typeof v === 'boolean'
    return (
      v === v &&
      // v !== '' &&
      ((v = typeof v), v === 'string' || v === 'number' || v === 'boolean')
    )
  }

  function toggle_class(E: Element, className: string, is: any) {
    E.classList[is ? 'add' : 'remove'](className)
  }
  function toggle_style(E: Element, k: string, v: any) {
    E.style[is(v) ? 'setProperty' : 'removeProperty'](k, v)
  }

  function add_or_remove_attribute(E: Element, k: string, v: any) {
    E[is(v) ? 'setAttribute' : 'removeAttribute'](k, v)
  }

  type IWatchCtx = { k: string; r: RElement; n?: number }

  function classBasic(this: IWatchCtx, v: any) {
    // prettier-ignore
    const { r: { node, _attrs, _class }, k } = this
    _attrs[k] = v = class_parser(v)
    if (node) {
      add_or_remove_attribute(node, k, v)
      if (_class) for (const k in _class) toggle_class(node, k, _class[k])
    }
  }
  function styleBasic(this: IWatchCtx, v: any) {
    // prettier-ignore
    const { r: { node, _attrs, _style }, k } = this
    _attrs[k] = v = style_parser(v)
    if (node) {
      add_or_remove_attribute(node, k, v)
      if (_style) for (const k in _style) toggle_style(node, k, _style[k])
    }
  }

  const REG_EVENT_EXTRA = /^on-./
  function eventExtra(this: IWatchCtx, v: any) {
    const { k, r, n } = this
    const { node, _unevt } = r
    _unevt![n == null ? (this.n = _unevt!.length) : (_unevt![n](), n)] =
      node && v
        ? listen(node, k as 'mouseup', function (e: any) {
            v.call(r, e)
          })
        : noop
  }
  const REG_CLASS_EXTRA = /^class-./
  function classExtra(this: IWatchCtx, v: any) {
    // prettier-ignore
    const { r: { node, _class }, k } = this
    _class![k] = v
    if (node) toggle_class(node, k, v)
  }
  const REG_STYLE_EXTRA = /^style-./
  function styleExtra(this: IWatchCtx, v: any) {
    // prettier-ignore
    const { r: { node, _style }, k } = this
    _style![k] = v
    if (node) toggle_style(node, k, v)
  }
  const REG_XLINK_EXTRA = /^xlink-./
  function xlinkExtra(this: IWatchCtx, v: any) {
    // prettier-ignore
    const { r: { node, _attrs }, k } = this
    _attrs[k] = v
    if (node) node[is(v) ? 'setAttributeNS' : 'removeAttributeNS'](NAMESPACES_URI.xlink, k, v)
  }

  function propsBasic(this: IWatchCtx, v: any) {
    // prettier-ignore
    const { r: { node, _attrs }, k } = this
    _attrs[k] = v
    if (node)
      k in node && __dsa_get_descriptor_1(node.localName, k, node)
        ? (node[k as 'id'] = v)
        : add_or_remove_attribute(node, k, v)
  }
  // BEGIN SET_ATTRIBUTE
  const __DSA_2: { [key: string]: { [key: string]: any } } = {}
  function __dsa_get_descriptor_1(tag_obj: any, k: string, E: any) {
    if (!hasOwn((tag_obj = __DSA_2[tag_obj] || (__DSA_2[tag_obj] = {})), k)) {
      let r: PropertyDescriptor | undefined
      for (; (E = getPrototypeOf(E)) && !(r = getOwnPropertyDescriptor(E, k)); );
      tag_obj[k] = r && r.set
    }
    return tag_obj[k]
  }
  // END SET_ATTRIBUTE

  function xkey(k: string, n: number): string {
    return k[n] === '-' ? k.slice(n + 1) : k[n].toLowerCase() + k.slice(n + 1)
  }
  function clearEvents(iam: RElement) {
    for (const a = iam._unevt!; a.length > 0; ) a.pop()!()
  }

  return function (iam: RElement, v: any, k: string) {
    // prettier-ignore
    const cb = 
        k === 'style' ?
        styleBasic
      : k === 'class' || k === 'className' && (k = 'class') ?
        classBasic
      : REG_EVENT_EXTRA.test(k) ?
        (k = xkey(k, 2), '_unevt' in iam || (iam._unevt = [], iam.onDestroy(clearEvents)),
        eventExtra)
      : REG_CLASS_EXTRA.test(k) ?
        (k = xkey(k, 5), '_class' in iam || (iam._class = {}),
        classExtra)
      : REG_STYLE_EXTRA.test(k) ?
        (k = camel2dash(xkey(k, 5)), '_style' in iam || (iam._style = {}),
        styleExtra)
      : REG_XLINK_EXTRA.test(k) ?
        (k = 'xlink:' + xkey(k, 5),
        xlinkExtra)
      : propsBasic

    iam.watchDeep(v, cb, { r: iam, k })
  }
})()
