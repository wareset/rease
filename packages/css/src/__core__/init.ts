export const PROPERTIES: { [k: string]: string } = {}

let needStylePrefixesInit = true
export function init(): void {
  if (needStylePrefixesInit) {
    needStylePrefixesInit = false
    try {
      const RX = /^-[^-]+-/
      const CS = getComputedStyle(document.documentElement)
      for (let k in CS) {
        if (+k > -1) (k = CS[k]), (PROPERTIES[k.replace(RX, '')] = k)
      }
    } catch {}
  }
}
