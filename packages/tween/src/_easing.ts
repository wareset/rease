export function easeLinear(x: number) {
  return x
}

export function easeSineIn(x: number) {
  return 1 - Math.cos((x * Math.PI) / 2)
}
export function easeSineOut(x: number) {
  return Math.sin((x * Math.PI) / 2)
}
export function easeSineInOut(x: number) {
  // return (Math.cos(Math.PI * x) - 1) / -2
  return (1 - Math.cos(x * Math.PI)) / 2
}

export function easeQuadIn(x: number) {
  return x * x
}
export function easeQuadOut(x: number) {
  return 1 - --x * x
}
export function easeQuadInOut(x: number) {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2
}

export function easeCubicIn(x: number) {
  return x * x * x
}
export function easeCubicOut(x: number) {
  return 1 + --x * x * x
}
export function easeCubicInOut(x: number) {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2
}

export function easeQuartIn(x: number) {
  return x * x * x * x
}
export function easeQuartOut(x: number) {
  return 1 - --x * x * x * x
}
export function easeQuartInOut(x: number) {
  return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2
}

export function easeQuintIn(x: number) {
  return x * x * x * x * x
}
export function easeQuintOut(x: number) {
  // return 1 - Math.pow(1 - x, 5);
  return 1 + --x * x * x * x * x
}
export function easeQuintInOut(x: number) {
  return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2
}

export function easeExpoIn(x: number) {
  return x === 0 ? 0 : Math.pow(2, 10 * x - 10)
}
export function easeExpoOut(x: number) {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}
export function easeExpoInOut(x: number) {
  return x === 0 || x === 1
    ? x
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : Math.pow(2, 10 - x * 20) / -2 + 1
}

export function easeCircIn(x: number) {
  return 1 - Math.sqrt(1 - x * x)
}
export function easeCircOut(x: number) {
  return Math.sqrt(1 - --x * x)
}
export function easeCircInOut(x: number) {
  // return (x *= 2) < 1 ? (Math.sqrt(1 - x * x) - 1) / -2 : (Math.sqrt(1 - (x -= 2) * x) + 1) / 2
  return ((x *= 2) < 1 ? 1 - Math.sqrt(1 - x * x) : Math.sqrt(1 - (x -= 2) * x) + 1) / 2
}

export function easeBackIn(x: number) {
  const s = 1.70158
  return x * x * ((s + 1) * x - s)
}
export function easeBackOut(x: number) {
  const s = 1.70158
  return 1 + --x * x * ((s + 1) * x + s)
}
export function easeBackInOut(x: number) {
  const s = 1.70158 * 1.525
  return ((x *= 2) < 1 ? x * x * ((s + 1) * x - s) : (x -= 2) * x * ((s + 1) * x + s) + 2) / 2
}

export function easeElasticIn(x: number) {
  return x === 0 || x === 1 ? x : Math.sin((13 * x * Math.PI) / 2) * Math.pow(2, 10 * (x - 1))
}
export function easeElasticOut(x: number) {
  return x === 0 || x === 1
    ? x
    : Math.sin((-13 * (x + 1) * Math.PI) / 2) * Math.pow(2, -10 * x) + 1
}
export function easeElasticInOut(x: number) {
  return x === 0 || x === 1
    ? x
    : x < 0.5
    ? 0.5 * Math.sin(((+13 * Math.PI) / 2) * 2 * x) * Math.pow(2, 10 * (2 * x - 1))
    : 0.5 *
        Math.sin(((-13 * Math.PI) / 2) * (2 * x - 1 + 1)) *
        Math.pow(2, -10 * (2 * x - 1)) +
      1
}

export function easeBounceIn(x: number) {
  return 1 - easeBounceOut(1 - x)
}
export function easeBounceOut(x: number) {
  const n1 = 7.5625
  const d1 = 2.75
  return x < 1 / d1
    ? n1 * x * x
    : x < 2 / d1
    ? n1 * (x -= 1.5 / d1) * x + 0.75
    : x < 2.5 / d1
    ? n1 * (x -= 2.25 / d1) * x + 0.9375
    : n1 * (x -= 2.625 / d1) * x + 0.984375
}
export function easeBounceInOut(x: number) {
  return (x < 0.5 ? 1 - easeBounceOut(1 - 2 * x) : 1 + easeBounceOut(2 * x - 1)) / 2
}
