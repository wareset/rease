export const _Object = Object

/*@__NO_SIDE_EFFECTS__*/
export const getPrototypeOf = _Object.getPrototypeOf

/*@__NO_SIDE_EFFECTS__*/
export const keys = _Object.keys
/*@__NO_SIDE_EFFECTS__*/
export const getOwnPropertyDescriptor = _Object.getOwnPropertyDescriptor

/*@__NO_SIDE_EFFECTS__*/
export const is =
  _Object.is ||
  (function (x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y
  } as typeof _Object.is)

const hasOwnProperty = _Object.prototype.hasOwnProperty
/*@__NO_SIDE_EFFECTS__*/
export const hasOwn =
  _Object.hasOwn ||
  (function (o: object, v: string) {
    return hasOwnProperty.call(o, v)
  } as typeof _Object.hasOwn)
