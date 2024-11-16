import type { Rease } from './Rease'
import { escapeHTML } from './utils/shared'
import { RElement, RText } from './components'

const INCLUDE_HTML_TAGS = {
  // Embedded content
  embed: 1,
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
  button: 1,
  datalist: 1,
  // 'fieldset': 1,
  // 'form': 1,
  input: 1,
  // 'label': 1,
  // 'legend': 1,
  meter: 1,
  optgroup: 1,
  option: 1,
  // 'output': 1,
  progress: 1,
  select: 1,
  textarea: 1,

  // Web Components
  slot: 1,
  template: 1,
} as const

const is_childless_tag_name = (function (REG_CHILDLESS_TAGS) {
  return function (s: string) {
    return REG_CHILDLESS_TAGS.test(s)
  }
})(/^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/)

export function toHTMLString(rease: Rease) {
  const res: any[] = []
  if (rease instanceof RText) {
    res.push(escapeHTML(rease._is))
  } else if (rease instanceof RElement) {
    const localName = rease.name
    if (localName && !INCLUDE_HTML_TAGS.hasOwnProperty(localName)) {
      const _class = rease._class
      const _style = rease._style
      const _attrs = rease._attrs

      const arrClass = [] as any[]
      const arrStyle = [] as any[]
      const arrAttrs = [] as any[]

      let k: any, v: any
      if (_class) for (k in _class) if (_class[k]) arrClass.push(k)
      if (_style) for (k in _style) if ((v = _style[k])) arrStyle.push(k, ':', v, ';')
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

      if (arrClass.length) arrAttrs.push(' class=', JSON.stringify(arrClass.join(' ')))
      if (arrStyle.length) arrAttrs.push(' style=', JSON.stringify(arrStyle.join('')))
      res.push('<', localName, arrAttrs.join(''))

      if (is_childless_tag_name(localName)) {
        res.push('/>')
      } else {
        res.push('>')
        for (let a = rease.children, i = 0; i < a.length; i++) res.push(toHTMLString(a[i]))
        res.push('</', localName, '>')
      }
    }
  } else {
    for (let a = rease.children, i = 0; i < a.length; i++) res.push(toHTMLString(a[i]))
  }

  // switch (rease.component) {
  //   case RText:
  //     res.push(rease.shared.is)
  //     break
  //   case RElement: {
  //     const shared = rease.shared as any
  //     const tagName = shared.is

  //     if (INCLUDE_HTML_TAGS.indexOf(tagName) > -1) break

  //     const classes = shared.classes
  //     const styles = shared.styles
  //     const attrs = shared.attrs

  //     const arrClass = [] as any[]
  //     const arrStyle = [] as any[]
  //     const arrAttrs = [] as any[]

  //     let k: any, v: any
  //     if (classes) for (k in classes) if (classes[k]) arrClass.push(k)
  //     if (styles) for (k in styles) if ((v = styles[k])) arrStyle.push(k, ':', v, ';')
  //     if (attrs)
  //       for (k in attrs)
  //         if ((v = attrs[k]))
  //           switch (k) {
  //             case 'class':
  //               arrClass.push(v)
  //               break
  //             case 'style':
  //               arrStyle.push(v)
  //               break
  //             default:
  //               arrAttrs.push(' ', k, '=', JSON.stringify('' + v))
  //           }

  //     if (arrClass.length) arrAttrs.push(' class=', JSON.stringify(arrClass.join(' ')))
  //     if (arrStyle.length) arrAttrs.push(' style=', JSON.stringify(arrStyle.join('')))
  //     res.push('<', tagName, arrAttrs.join(''))

  //     if (is_childless_tag_name(tagName)) {
  //       res.push('/>')
  //     } else {
  //       res.push('>')
  //       for (let a = rease.children, i = 0; i < a.length; i++) res.push(toHTMLString(a[i]))
  //       res.push('</', tagName, '>')
  //     }
  //     break
  //   }
  //   default:
  //     for (let a = rease.children, i = 0; i < a.length; i++) res.push(toHTMLString(a[i]))
  // }

  return res.join('')
}
