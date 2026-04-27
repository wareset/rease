export const PROPERTIES = {
  __proto__: null,
} as unknown as { [key: string]: string }

let needStylePrefixesInit = true
export function init(): void {
  if (needStylePrefixesInit) {
    needStylePrefixesInit = false
    try {
      const RX = /^-[^-]+-/
      const CS = getComputedStyle(document.documentElement)
      for (let k in CS) {
        if (+k > -1) {
          k = CS[k]
          const origin = k.replace(RX, '')
          origin !== k && (PROPERTIES[origin] = k)
        }
      }
    } catch {}
  }
}
