/*@__NO_SIDE_EFFECTS__*/
export function hash(s?: string, maxSymbolsForHash?: number) {
  let z1: number
  if (s == null) {
    z1 = Math.random()
  } else {
    z1 = 1
    for (
      let c: number,
        l = s.length,
        n = (maxSymbolsForHash && (l / maxSymbolsForHash) >>> 1) || 1,
        i = 0;
      i < l;
      i += n
    ) {
      if ((c = s.charCodeAt(i)) === 13) i -= n - 1
      else {
        z1 += (c * z1) / (c + z1)
        // 1.52702839737111883966491632236284203827381134033203125
        for (; z1 > 1.5; ) z1 /= 10
      }
    }
  }
  return (z1 * 6e16 + 4e16).toString(36)
}
