import fs from 'node:fs'
import path from 'node:path'

console.log('CREATE SVG')

import { __dirname, requireResolve, PATH_GENERATED } from './utils.mjs'

import sax from 'sax'

fs.mkdirSync(PATH_GENERATED, { recursive: true })
const NAME_SVG_ATTR_CATEGORIES = 'svg_attr_categories'

const svgWG = 'w3c--svgwg'
const SVG_11 = requireResolve(
  path.join(svgWG, 'specs', 'integration', 'master', 'definitions-SVG11.xml')
)
const SVG_T12 = requireResolve(
  path.join(svgWG, 'specs', 'integration', 'master', 'definitions-SVGT12.xml')
)
const SVG_DEF = requireResolve(path.join(svgWG, 'master', 'definitions.xml'))
const SVG_ANIMATIONS = requireResolve(
  path.join(svgWG, 'specs', 'animations', 'master', 'definitions.xml')
)
const SVG_DEF_MASKING = requireResolve(path.join(svgWG, 'master', 'definitions-masking.xml'))
const SVG_DEF_FILTERS = requireResolve(path.join(svgWG, 'master', 'definitions-filters.xml'))

setTimeout(async () => {
  const attrcats = {}
  const elements_11 = await getSpecElements(SVG_11, attrcats)
  const elements_T12 = await getSpecElements(SVG_T12, attrcats)
  const elements_ANIM = await getSpecElements(SVG_ANIMATIONS, attrcats)
  const elements_MASK = await getSpecElements(SVG_DEF_MASKING, attrcats)
  const elements_FILT = await getSpecElements(SVG_DEF_FILTERS, attrcats)
  const elements_MAIN = await getSpecElements(SVG_DEF, attrcats)

  let offset = 0
  const setOffset = (k) => (offset = Math.max(offset, k.length))

  for (const k in elements_11) setOffset(k)
  for (const k in elements_T12) setOffset(k), delete elements_11[k]
  for (const k in elements_MAIN) setOffset(k), delete elements_11[k], delete elements_T12[k]
  for (const k in elements_ANIM) setOffset(k), delete elements_11[k], delete elements_T12[k]
  for (const k in elements_MASK) setOffset(k), delete elements_11[k], delete elements_T12[k]
  for (const k in elements_FILT) setOffset(k), delete elements_11[k], delete elements_T12[k]

  for (const k in attrcats) {
    if (k.indexOf('event') > -1) delete attrcats[k]
  }

  writeAttributeCategory(attrcats)

  let res = '' // `import { SVGElementByTagName } from '../utils';\n`
  res += `import {`
  for (const cat in attrcats) {
    // if (attrcats[cat] === 'WindowCategory') continue
    res += `\n  ${attrcats[cat]},`
  }
  res += `\n} from './${NAME_SVG_ATTR_CATEGORIES}';`

  // /**
  res += `
${titleComment('animations')}
${createInterfaces(elements_ANIM, attrcats)}

${titleComment('masking')}
${createInterfaces(elements_MASK, attrcats)}

${titleComment('filters')}
${createInterfaces(elements_FILT, attrcats)}

${titleComment('general')}
${createInterfaces(elements_MAIN, attrcats)}

${titleComment('SVGT12')}
${createInterfaces(elements_T12, attrcats, '@deprecated')}

${titleComment('SVG11')}
${createInterfaces(elements_11, attrcats, '@deprecated')}

export interface JSX_SVG {
${titleComment('animations', 2)}
${createCommonInterface(elements_ANIM, offset)}

${titleComment('masking', 2)}
${createCommonInterface(elements_MASK, offset)}

${titleComment('filters', 2)}
${createCommonInterface(elements_FILT, offset)}

${titleComment('general', 2)}
${createCommonInterface(elements_MAIN, offset)}

${titleComment('SVGT12', 2)}
${createCommonInterface(elements_T12, offset, '@deprecated')}

${titleComment('SVG11', 2)}
${createCommonInterface(elements_11, offset, '@deprecated')}
}
`
  // */

  /*
  res += `
${titleComment('animations')}
${createInterfaces(elements_ANIM, attrcats)}

${titleComment('SVGT12')}
${createInterfaces(elements_T12, attrcats, '@deprecated')}

${titleComment('SVG11')}
${createInterfaces(elements_11, attrcats, '@deprecated')}

export interface JSX_SVG {
${titleComment('animations', 2)}
${createCommonInterface(elements_ANIM, offset)}

${titleComment('SVGT12', 2)}
${createCommonInterface(elements_T12, offset, '@deprecated')}

${titleComment('SVG11', 2)}
${createCommonInterface(elements_11, offset, '@deprecated')}
}
`
  // */

  // console.log(res)
  fs.writeFileSync(path.join(PATH_GENERATED, 'jsx_svg.ts'), res)
}, 100)

function writeAttributeCategory(attrcats) {
  let res = ''
  for (const name in attrcats) {
    if (!attrcats[name].length) {
      delete attrcats[name]
      continue
    }

    const iname = toAttrCategoryName(name)
    res += `\n// ${name}`
    res += `\nexport interface ${iname} {`
    const acache = {}
    for (const attr of attrcats[name]) {
      if (!acache[attr]) res += `\n  ${JSON.stringify(toAttr((acache[attr] = attr)))}: any;`
    }
    res += '\n}\n'

    attrcats[name] = iname
  }

  res = res.trim() + '\n'

  fs.writeFileSync(path.join(PATH_GENERATED, NAME_SVG_ATTR_CATEGORIES + '.ts'), res)
}

function titleComment(s, offset = 0) {
  let res = ''
  res += ''.padStart(offset, ' ') + '/**\n'
  res += ''.padStart(offset + 1, ' ') + `* ${s}\n`
  res += ''.padStart(offset + 1, ' ') + '*/'

  return res
}

function createInterfaces(elements, attrs, comment) {
  let res = ''

  for (const name in elements) {
    const acache = {}
    const node = elements[name]
    res += `\n// tagName: ${name}`
    if (node.elements.length) {
      res += `\n// elements: ${node.elements.join(', ')}`
    }
    if (node.elementcategories.length) {
      res += `\n// elementcategories: ${node.elementcategories.join(', ')}`
    }

    const acats =
      node.attributecategories
        .map((v) => attrs[v] || '')
        .filter(Boolean)
        .join(' & ') || '{}'
        // .join(', ') || '{}'

    if (comment) res += `\n/** ${comment} */`
    res += `\nexport type ${toClassName(name)} = ${acats} & {`
    // res += `\nexport interface ${toClassName(name)} extends SVGElementByTagName<${JSON.stringify(
    //   name
    // )}, ${acats}> {`

    if (node.attributes.length) {
      for (const attr of node.attributes) {
        if (!acache[attr]) res += `\n  ${JSON.stringify(toAttr((acache[attr] = attr)))}: any;`
      }
    }
    if (node.geometryproperties.length) {
      res += `\n  // geometryproperties`
      for (const attr of node.geometryproperties) {
        if (!acache[attr]) res += `\n  ${JSON.stringify(toAttr((acache[attr] = attr)))}: any;`
      }
    }

    res += '\n}\n'
  }

  return res
}

function createCommonInterface(elements, offset = 0, comment) {
  let res = ''
  for (const name in elements) {
    const node = elements[name]
    if (comment) res += `\n  /** ${comment} */`
    res += `\n  ${(JSON.stringify(name) + ':').padEnd(offset + 3, ' ')} ${toClassName(name)} & { children: any };`
  }
  return res
}

function toAttr(s = '') {
  return s.replace(/\W/, '-')
}

function toAttrCategoryName(s = '') {
  return (
    s
      .split(/\W+/)
      .map((v) => v[0].toUpperCase() + v.slice(1))
      .join('') + 'Category'
  )
}

function toClassName(s = '') {
  return (
    'JSX_SVG_' +
    s
      .split(/\W+/)
      .map((v) => v[0].toUpperCase() + v.slice(1))
      .join('')
  )
}

async function getSpecElements(path = '', attributecategory) {
  const saxStream = sax.createStream(true)
  const data = { node: {}, children: [] }
  const CURRENT = [data]
  let newCur

  saxStream.on('error', (e) => {
    throw e
  })
  saxStream.on('text', (text) => {
    CURRENT[CURRENT.length - 1].text = text
  })
  saxStream.on('opentag', (node) => {
    CURRENT[CURRENT.length - 1].children.push((newCur = { node, children: [] }))
    if (!node.isSelfClosing) CURRENT.push(newCur)
  })
  saxStream.on('closetag', (node) => {
    if (node === CURRENT[CURRENT.length - 1].node.name) CURRENT.pop()
  })
  await new Promise((res) => {
    saxStream.on('end', () => {
      res()
    })
    fs.createReadStream(path).pipe(saxStream)
  })

  const items = []
  for (const { children } of data.children) items.push.apply(items, children)
  // const attributecategory = {}
  const elements = {}

  for (const item of items) {
    const { node, children } = item
    switch (node.name) {
      case 'element': {
        const attributes = node.attributes
        const name = attributes.name
        if (elements[name]) console.error('elements', name)
        if (!attributes.name) console.error('element name', node)
        if (!attributes.interfaces) {
          // console.error('element interfaces', node)
          break
        }

        elements[name] = parseChildrenAttributes(
          {
            interfaces: splitSemi(attributes.interfaces),
            attributecategories: splitSemi(attributes.attributecategories),
            elementcategories: splitSemi(attributes.elementcategories),
            geometryproperties: splitSemi(attributes.geometryproperties),
            elements: splitSemi(attributes.elements),
            attributes: splitSemi(attributes.attributes)
          },
          children
        )

        break
      }
      case 'attributecategory': {
        const attributes = node.attributes
        const name = attributes.name
        const item = parseChildrenAttributes(
          { attributes: splitSemi(attributes.presentationattributes) },
          children
        )

        // if (!attributecategory[name]) {
        attributecategory[name] = item.attributes
        // } else {
        //   attributecategory[name].push(...item.attributes)
        //   attributecategory[name] = unique(attributecategory[name])
        // }
        break
      }
      default:
      // console.log()
    }
  }

  // console.log('elements', Object.keys(elements).length, elements)
  // console.log('attributecategory', attributecategory)
  return elements
}

function unique(a = []) {
  return a.filter((v, k, a) => v && a.indexOf(v) === k)
}

function splitSemi(s = '') {
  return s ? unique(s.trim().split(/\s*,\s*/)) : []
}

function parseChildrenAttributes(element, children = []) {
  if (children.length) {
    // console.log(element.name, children)
    for (const item of children) {
      const node = item.node
      const name = node.name
      if (name !== 'attribute') {
        // console.error('element attribute is ' + name, node)
      } else {
        const attr = node.attributes.name
        if (element.attributes.indexOf(attr) < 0) element.attributes.push(attr)
      }
    }
  }

  return element
}
