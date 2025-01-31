import { IThenable, ICatchable, ISubscribable } from '../types'

/*@__NO_SIDE_EFFECTS__*/
export function isString(v: any): v is string {
  return typeof v === 'string'
}
/*@__NO_SIDE_EFFECTS__*/
export function isFunction(v: any): v is Function {
  return typeof v === 'function'
}
/*@__NO_SIDE_EFFECTS__*/
export function isThenable(v: any): v is IThenable<any> {
  return v != null && typeof v.then === 'function'
}
/*@__NO_SIDE_EFFECTS__*/
export function isCatchable(v: any): v is ICatchable<any> {
  return v != null && typeof v.catch === 'function'
}
/*@__NO_SIDE_EFFECTS__*/
export function isSubscribable(v: any): v is ISubscribable<any> {
  return v != null && typeof v.subscribe === 'function'
}
// export const isSubscribableOrThenable = (v: any): v is ISubscribable<any> =>
//   v != null && (typeof v.subscribe === 'function' || typeof v.then === 'function')
