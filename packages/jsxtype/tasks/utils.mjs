import fs from 'node:fs'
import url from 'node:url'
import path from 'node:path'

export const __dirname = path.dirname(url.fileURLToPath(import.meta.url))

export function requireResolve(name) {
  let dir = __dirname
  let res
  for (; !fs.existsSync((res = path.join(dir, 'node_modules', name))); ) {
    if (dir === (dir = path.dirname(dir))) throw name
  }
  return res
}

export const PATH_GENERATED = path.resolve(__dirname, '../src/generated')