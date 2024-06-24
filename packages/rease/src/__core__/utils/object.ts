export const _Object = Object

export const getPrototypeOf = _Object.getPrototypeOf

export const keys = _Object.keys
export const getOwnPropertyDescriptor = _Object.getOwnPropertyDescriptor

export const is =
  _Object.is ||
  (function (x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y
  } as typeof _Object.is)

const hasOwnProperty = _Object.prototype.hasOwnProperty
export const hasOwn =
  _Object.hasOwn ||
  (function (o: object, v: string) {
    return hasOwnProperty.call(o, v)
  } as typeof _Object.hasOwn)
