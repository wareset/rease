import { init, PROPERTIES } from './__core__/init'
import { parse as parseOrigin } from './__core__/parse'

export { init as _cssInit, PROPERTIES as _cssProperties }
export const css = (function () {
  let parse = function (source, classes: any) {
    return init(), (parse = parseOrigin)(source, classes)
  } as typeof parseOrigin

  let css_id_count = 0
  const CSS_CACHE_DIRTY: { [k: string]: [number, CSSObj, null | HTMLStyleElement] } = {}

  type CSSObj = {
    readonly [key: `_${string}`]: string
    readonly id: string
    readonly text: string
    readonly destroy: () => void
  }

  const setStyleNode =
    typeof window !== 'undefined'
      ? function (iam: any) {
          const node = document.getElementById(iam.id) || document.createElement('style')
          node.id = iam.id
          node.textContent = iam.text
          document.head.appendChild(node)
          return node as HTMLStyleElement
        }
      : function () {
          return null
        }

  return function css(template: TemplateStringsArray | string[]) {
    const l = template.length * 2 - 1
    const a = Array(l)
    for (let i = 0, j = 0; (a[i] = template[i++ - j]), i < l; i++) a[i] = arguments[++j]
    const source = a.join('')

    let cache_source = CSS_CACHE_DIRTY[source]
    if (!(source in CSS_CACHE_DIRTY)) {
      const iam = { id: 'rs_' + ++css_id_count } as any
      iam.text = parse(source, iam)
      CSS_CACHE_DIRTY[source] = cache_source = [0, iam, setStyleNode(iam)]
    }

    cache_source[0]++
    let active = true
    const iam = {} as any
    const now = cache_source[1] as any
    for (const k in now) iam[k] = now[k]
    iam.destroy = function () {
      if (active) {
        active = false
        if (source in CSS_CACHE_DIRTY && --cache_source[0] < 1) {
          let parent
          let node = cache_source[2]
          node && (parent = node.parentNode) && parent.removeChild(node)
          delete CSS_CACHE_DIRTY[source]
        }
      }
    }
    return iam as CSSObj
  } as (template: TemplateStringsArray | string[], ...values: any[]) => CSSObj
})()
