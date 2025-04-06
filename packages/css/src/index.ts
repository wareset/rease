import { init as _cssInit, PROPERTIES as _cssProperties } from './__core__/init'
import { parse as parseOrigin } from './__core__/parse'

export { _cssInit, _cssProperties }
// export const css = (function () {
let parse = function (source, classes) {
  return _cssInit(), (parse = parseOrigin)(source, classes)
} as typeof parseOrigin

let css_id_count = 0
const CSS_CACHE_DIRTY: {
  [k: string]: [number, CSSObj, null | HTMLStyleElement]
} = {}

type CSSObj = {
  readonly [key: `_${string}`]: string
  readonly id: string
  readonly css: string
  readonly destroyed: boolean
  readonly destroy: () => void
}

const setStyleNode =
  typeof document !== 'undefined'
    ? function (iam: any) {
        const node =
          document.getElementById(iam.id) || document.createElement('style')
        node.id = iam.id
        node.textContent = iam.css
        document.head.appendChild(node)
        return node as HTMLStyleElement
      }
    : function () {
        return null
      }

const removeStyleNode =
  typeof document !== 'undefined'
    ? function (node: HTMLStyleElement) {
        const parent = node.parentNode
        parent && parent.removeChild(node)
      }
    : function () {}

export function css(
  template: TemplateStringsArray | string[],
  ...values: any[]
) {
  const l = template.length * 2 - 1
  const a = Array(l)
  // for (let i = 0, j = 0; (a[i] = template[i++ - j]), i < l; i++) a[i] = arguments[++j]
  for (let i = 0, j = 0; (a[i] = template[i++ - j]), i < l; i++)
    a[i] = values[j++]
  const source = a.join('') // .trim()

  if (!CSS_CACHE_DIRTY.hasOwnProperty(source)) {
    const iam = { id: 'rcss_' + ++css_id_count } as any
    iam.css = parse(source, iam)
    CSS_CACHE_DIRTY[source] = [0, iam, setStyleNode(iam)]
  }

  let active = true
  const iam = {} as any
  const cache_source = CSS_CACHE_DIRTY[source]
  const now = cache_source[1] as any
  cache_source[0]++
  for (const k in now) iam[k] = now[k]
  iam.destroyed = false
  iam.destroy = function () {
    iam.destroyed = true
    if (active) {
      active = false
      if (CSS_CACHE_DIRTY.hasOwnProperty(source) && --cache_source[0] < 1) {
        // const node = cache_source[2]
        // if (node) {
        //   const parent = node.parentNode
        //   parent && parent.removeChild(node)
        // }
        removeStyleNode(cache_source[2]!)
        delete CSS_CACHE_DIRTY[source]
      }
    }
  }
  return iam as CSSObj
} // as (template: TemplateStringsArray | string[], ...values: any[]) => CSSObj
// })()
