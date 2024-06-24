export function hash(s?: string, isFast?: boolean) {
  let z1: number
  if (s == null) {
    z1 = Math.random()
  } else {
    z1 = 0.9973
    s += ''
    for (
      let r = 1 / z1, c: number, l = s.length, n = isFast ? (l / 99) >>> 1 || 1 : 1, i = 0;
      i < l;
      i += n
    ) {
      if ((c = s.charCodeAt(i)) === 13) i -= n - 1
      else (z1 += (c * z1 * 997.3) / (c + z1) + r), z1 > 0 && (z1 -= z1 | 0)
    }
  }
  return (z1 * 5e16 + 4e16).toString(36)
}
