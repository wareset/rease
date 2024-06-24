import fs from 'node:fs'
import path from 'node:path'

console.log('CREATE HTML')

import { __dirname, requireResolve, PATH_GENERATED } from './utils.mjs'

const webCustomData = '@vscode/web-custom-data'
const CSS_DATA_PATH = requireResolve(path.join(webCustomData, 'data', 'browsers.css-data.json'))
const HTML_DATA_PATH = requireResolve(path.join(webCustomData, 'data', 'browsers.html-data.json'))

const HTML_DATA = JSON.parse(fs.readFileSync(HTML_DATA_PATH, 'utf8'))
// console.log(HTML_DATA)

const valueSets = {}
function createValueSets() {
  let res = 'export interface ValueSets {'
  for (let a = HTML_DATA.valueSets, i = 0; i < a.length; i++) {
    const item = a[i]
    const k = item.name
    const v = item.values
      .map((v) => {
        v = v.name
        if (v === 'true') return v
        if (v === 'false') return v
        if (v === 'undefined') return v
        return "'" + v + "'"
      })
      .join(' | ')
    valueSets[k] = v
    res += `\n  '${k}': ${v}`
  }
  res += '\n}\n'

  console.log(res)
  fs.writeFileSync(path.join(PATH_GENERATED, 'html_value_sets.ts'), res)
}
createValueSets()

function createGlobalAttributes() {
  let res = 'import { ValueSets } from "./html_value_sets"\n\n'
  res += 'export interface GlobalAttributes {'
  for (let a = HTML_DATA.globalAttributes, i = 0; i < a.length; i++) {
    const item = a[i]
    const k = item.name
    const v = valueSets[item.valueSet] ? `ValueSets['${item.valueSet}']` : 'any'
    res += `\n  '${k}': ${v}`
  }
  res += '\n}\n'

  console.log(res)
  fs.writeFileSync(path.join(PATH_GENERATED, 'html_global_attributes.ts'), res)
}
createGlobalAttributes()

function createTags() {
  let res = 'import { ValueSets } from "./html_value_sets"\n\n'
  res += 'export interface Tags {'
  for (let a = HTML_DATA.tags, i = 0; i < a.length; i++) {
    const item = a[i]
    const k = item.name
    let v = (item.void ? '' : '{ children: any }')
    const attrs = item.attributes
    if (attrs && attrs.length) {
      if (v) v += ' & '
      const ats = {}
      for (let a = attrs, i = 0; i < a.length; i++) {
        const item = a[i]
        const k1 = item.name
        const v2 = valueSets[item.valueSet] ? `ValueSets['${item.valueSet}']` : 'any'
        ats[k1] = v2
      }
      let at = '{ '
      for (const k in ats) at += `'${k}': ${ats[k]}; `
      at += '}'
      v += at
    }
    res += `\n  '${k}': ${v || '{}'}`
  }
  res += '\n}\n'

  console.log(res)
  fs.writeFileSync(path.join(PATH_GENERATED, 'html_tags.ts'), res)
}
createTags()


// const CSS_DATA = JSON.parse(fs.readFileSync(CSS_DATA_PATH, 'utf8'))
// console.log(CSS_DATA)
