import type { Rease } from './Rease'
import { escapeHTML } from './utils/shared'
import { RElement, RText, RHtml } from './components'

// https://developer.mozilla.org/en-US/docs/Web/HTML/Element
const INCLUDE_HTML_TAGS = {
  // Main root
  html: 1,

  // Document metadata
  // base: 1,
  head: 1,
  // link:1,
  // meta: 1,
  // style: 1,
  // title: 1,

  // Sectioning root
  body: 1,

  // Embedded content
  embed: 1,
  fencedframe: 1,
  iframe: 1,
  object: 1,
  // 'picture': 1,
  portal: 1,
  // 'source': 1,

  // SVG and MathML
  svg: 1,
  math: 1,

  // Scripting
  canvas: 1,
  // 'noscript': 1,
  script: 1,

  // Forms
  // button: 1,
  // datalist: 1,
  // 'fieldset': 1,
  // 'form': 1,
  // input: 1,
  // 'label': 1,
  // 'legend': 1,
  // meter: 1,
  // optgroup: 1,
  // option: 1,
  // 'output': 1,
  // progress: 1,
  // select: 1,
  // textarea: 1,

  // Web Components
  slot: 1,
  template: 1,
} as const

const CHILDLESS_HTML_TAGS = {
  area: 1,
  base: 1,
  br: 1,
  col: 1,
  command: 1,
  embed: 1,
  frame: 1,
  hr: 1,
  img: 1,
  input: 1,
  isindex: 1,
  keygen: 1,
  link: 1,
  meta: 1,
  param: 1,
  source: 1,
  track: 1,
  wbr: 1,
} as const

/*@__NO_SIDE_EFFECTS__*/
export function toHTMLString(rease: Rease) {
  const res: any[] = []
  if (rease instanceof RElement) {
    const localName = rease.type
    if (localName && !INCLUDE_HTML_TAGS.hasOwnProperty(localName)) {
      const _class = rease._class
      const _style = rease._style
      const _attrs = rease._attrs

      const arrClass = [] as any[]
      const arrStyle = [] as any[]
      const arrAttrs = [] as any[]

      let k: any, v: any
      if (_class) for (k in _class) if (_class[k]) arrClass.push(k)
      if (_style)
        for (k in _style) if ((v = _style[k])) arrStyle.push(k, ':', v, ';')
      if (_attrs)
        for (k in _attrs)
          if ((v = _attrs[k]))
            switch (k) {
              case 'class':
                arrClass.push(v)
                break
              case 'style':
                arrStyle.push(v)
                break
              default:
                arrAttrs.push(' ', k, '=', JSON.stringify('' + v))
            }

      if (arrClass.length)
        arrAttrs.push(' class=', JSON.stringify(arrClass.join(' ')))
      if (arrStyle.length)
        arrAttrs.push(' style=', JSON.stringify(arrStyle.join('')))
      res.push('<', localName, arrAttrs.join(''))

      if (CHILDLESS_HTML_TAGS.hasOwnProperty(localName)) {
        res.push('/>')
      } else {
        res.push('>')
        for (let a = rease.children, i = 0; i < a.length; i++)
          res.push(toHTMLString(a[i]))
        res.push('</', localName, '>')
      }
    }
  } else if (rease instanceof RText) {
    res.push(escapeHTML(rease.data))
  } else if (rease instanceof RHtml) {
    res.push(rease.data)
  } else {
    for (let a = rease.children, i = 0; i < a.length; i++)
      res.push(toHTMLString(a[i]))
  }

  return res.join('')
}
