import { IThenable, ICatchable, ISubscribable } from '../types'

export function isString(v: any): v is string {
  return typeof v === 'string'
}
export function isFunction(v: any): v is Function {
  return typeof v === 'function'
}
export function isThenable(v: any): v is IThenable<any> {
  return v != null && typeof v.then === 'function'
}
export function isCatchable(v: any): v is ICatchable<any> {
  return v != null && typeof v.catch === 'function'
}
export function isSubscribable(v: any): v is ISubscribable<any> {
  return v != null && typeof v.subscribe === 'function'
}
// export const isSubscribableOrThenable = (v: any): v is ISubscribable<any> =>
//   v != null && (typeof v.subscribe === 'function' || typeof v.then === 'function')
