import { Rease } from '../Rease'
import { hasOwn, is as objectIs, keys } from '../utils/object'

//
// RForIn
//
function forIn(this: [iam: RForIn, children: any, old: any], is: any) {
  const { 0: iam, 1: cb, 2: old } = this
  const now = {} as any
  this[2] = now
  if (!(is = is[0])) {
    iam.destroyChildren()
  } else {
    const children = iam.children
    let last = 0
    let v: any, tmp: any
    for (const k in is) {
      if (iam.destroyed) return
      if (hasOwn(is, k)) {
        v = is[k]
        if (hasOwn(old, k) && objectIs((tmp = old[k])[0], v)) {
          v = (now[k] = tmp)[1]
          delete old[k]
        } else {
          now[k] = [v, (v = iam.insert(cb(v, k, is), last))]
        }
        if (v.length && (v = children.lastIndexOf(v[v.length - 1])) > -1) last = v + 1
      }
    }
    for (let o = keys(old), j = o.length; j-- > 0; )
      for (let a = old[o[j]][1], i = a.length; i-- > 0; ) a[i].destroy()
  }
}
export class RForIn extends Rease {
  constructor({
    is,
    watch,
    children,
  }: {
    is: any
    watch?: any
    children: (v: any, k: string, a: any) => any
  }) {
    super()
    this.watchDeepAll([is, watch], forIn, [this, children, {}])
  }
}

//
// RForOf
//
function indexForOf(a: any[], v: any, from: number) {
  for (let i = from, l = a.length; i < l; i++) if (objectIs(a[i], v)) return i
  return -1
}
function forOf(this: [iam: RForOf, children: any, oldV: any[], oldR: any[]], is: any) {
  const { 0: iam, 1: cb, 2: oldV, 3: oldR } = this
  const nowV = [] as any[]
  const nowR = [] as any[]
  this[2] = nowV
  this[3] = nowR
  if (!(is = is[0])) {
    iam.destroyChildren()
  } else {
    const children = iam.children
    let last = 0
    let from = 0
    let idx: number
    let v: any
    for (const k in is) {
      if (iam.destroyed) return
      if (hasOwn(is, k)) {
        nowV.push((v = is[k]))
        if ((idx = indexForOf(oldV, v, from)) > -1) {
          nowR.push((v = oldR[idx])), (oldR[idx] = oldR), (from = idx + 1)
        } else {
          nowR.push((v = iam.insert(cb(v, '' + (idx = +k) === k ? idx : k, is), last)))
        }
        if (v.length && (v = children.lastIndexOf(v[v.length - 1])) > -1) last = v + 1
      }
    }
    for (let i = oldR.length, a; i-- > 0; )
      if ((a = oldR[i]) !== oldR) for (let i = a.length; i-- > 0; ) a[i].destroy()
  }
}
export class RForOf extends Rease {
  _is: any
  constructor({
    is,
    watch,
    children,
  }: {
    is: any
    watch?: any
    children: (v: any, k: string | number, a: any) => any
  }) {
    super()
    this.watchDeepAll([is, watch], forOf, [this, children, [], []])
  }
}
