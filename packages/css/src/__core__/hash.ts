export function hash(s: string) {
  let z1 = 1 // 0.9973
  for (let i = s.length, c: number; i-- > 0; ) {
    if ((c = s.charCodeAt(i)) !== 13) {
      z1 += (c * z1) / (c + z1)
      for (; z1 > 1.5; ) z1 /= 10
    }
  }
  // return z1
  return (z1 * 6e16 + 4e16).toString(36)
}
