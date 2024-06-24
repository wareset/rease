import type { IThenable, ISubscriber, IUnsubscriber, ISubscribable } from '..'
import type { ISubscribedOrThened, ISubscribedOrThenedDeep } from '..'

import { noop } from '..'
import { then } from '..'
import { _Array } from '..'
import { isSubscribable, isThenable } from '..'

import type { ISignal } from '@rease/signal'
import { isSignal, signal, batch } from '@rease/signal'

function observablefyThenable<T>(promise: IThenable<T>) {
  return {
    subscribe<C>(cb: ISubscriber<T, C>, thisArg?: C) {
      return then(promise, cb, thisArg)
    }
  }
}

function _s1<T, C>(this: { f: ISubscriber<T, C>; c: C; s: ISignal<any>; u: any }, v: T) {
  // if (v !== this) this.f.call(this.c, v)
  if (v !== this) {
    this.f.call(this.c, v)
    // FIX
    // @ts-ignore
    const n = this.s._.s
    if (n && n.c === this) (n.f = this.f), (n.c = this.c)
  }
}

function _s2(v: ISubscribable<any>, data: { f: any; c: any; s: ISignal<any> }) {
  let u0 = noop
  let u1: any = v.subscribe(function (v) {
    u0(), (u0 = noop)
    if (isSubscribable(v) || (isThenable(v) && ((v = observablefyThenable(v)), true))) {
      u0 = _s2(v as any, data)
    } else {
      data.s.set(v)
    }
  })
  return function () {
    u0(), u1.unsubscribe ? u1.unsubscribe() : u1(), (u0 = u1 = noop)
  }
}

function _o1(this: { f: any; c: any }, v: any) {
  batch(this.f, this.c, [v as any])
}

export function watch<T, C = undefined>(
  v: T,
  cb: ISubscriber<ISubscribedOrThened<T>, C>,
  thisArg?: C
): IUnsubscriber {
  if (isSignal(v)) return (v as any).subscribe(cb, thisArg)
  if (isSubscribable(v)) {
    const data = { f: cb, c: thisArg, s: null } as any
    data.s = signal(data as any)
    let u1: any = (v as any).subscribe(function (v: any) {
      data.s.set(v)
    })
    let u0 = data.s.subscribe(_s1, data)
    return function () {
      u0(), u1.unsubscribe ? u1.unsubscribe() : u1(), (u0 = u1 = noop)
    }
  }
  if (isThenable(v)) return then(v, _o1, { f: cb, c: thisArg })
  return batch(cb, thisArg!, [v as any]), noop
}
export function watchDeep<T, C = undefined>(
  v: T,
  cb: ISubscriber<ISubscribedOrThenedDeep<T>, C>,
  thisArg?: C
): IUnsubscriber {
  if (isSubscribable(v) || (isThenable(v) && ((v = observablefyThenable(v) as any), true))) {
    const data = { f: cb, c: thisArg, s: null } as any
    data.s = signal(data as any)
    let u1 = _s2(v as any, data)
    let u0 = data.s.subscribe(_s1, data)
    return function () {
      u0(), u1(), (u0 = u1 = noop)
    }
  }
  return batch(cb, thisArg!, [v as any]), noop
}

function _s3(
  this: {
    d: { l: number; v: any[]; u: any[]; s: ISignal<any>; f: any; c: any }
    i: number
    f: boolean
  },
  value: any
) {
  const data = this.d
  data.v[this.i] = value
  if (data.l < 1) {
    data.s.set(data.v.slice())
  } else if (this.f && ((this.f = false), --data.l < 1)) {
    data.s.set(data.v.slice())
    data.u.push(data.s.subscribe(data.f, data.c))
  }
}
function _wb(u: any[], watchFn: any, a: any, cb: any, thisArg: any) {
  const l = a.length
  const data = { l, v: _Array(l), u, s: signal(u), f: cb, c: thisArg }
  for (let i = 0; i < l; i++) u[i] = watchFn(a[i], _s3, { d: data, i, f: true })
}
function _w0(watchFn: typeof watchDeep | typeof watch) {
  return function (a: any, cb: any, thisArg: any) {
    const l = a.length
    if (l > 0) {
      const u = _Array(l) as any[]
      batch(_wb, void 0, [u, watchFn, a, cb, thisArg])
      return function () {
        for (; u.length > 0; ) u.pop()!()
      }
    } else {
      return batch(cb, thisArg, [[]]), noop
    }
  }
}
export const watchAll = _w0(watch) as <T extends readonly unknown[] | [], C = undefined>(
  a: T,
  cb: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThened<T[P]> }, C>,
  ctx?: C
) => IUnsubscriber

export const watchDeepAll = _w0(watchDeep) as <T extends readonly unknown[] | [], C = undefined>(
  a: T,
  cb: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]> }, C>,
  ctx?: C
) => IUnsubscriber
