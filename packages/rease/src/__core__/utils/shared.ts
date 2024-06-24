// https://developer.mozilla.org/ru/docs/Web/SVG/Element/foreignObject
const __uri__ = 'http://www.w3.org/'
export const NAMESPACES_URI = {
  // _   : __uri__ + '1999/xhtml',
  svg: __uri__ + '2000/svg',
  math: __uri__ + '1998/Math/MathML',
  xlink: __uri__ + '1999/xlink'
} as const

export function escapeHTML(s: string) {
  return s.replace(/["'&<>]/g, function (v) {
    switch (v) {
      case '"':
        v = '&quot;'
        break
      case "'":
        v = '&#39;'
        break
      case '&':
        v = '&amp;'
        break
      case '<':
        v = '&lt;'
        break
      case '>':
        v = '&gt;'
        break
    }
    return v
  })
}
