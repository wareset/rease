import type {
  IThenable,
  ISubscriber,
  IUnsubscriber,
  ISubscribable,
  ISubscribedOrThened,
  ISubscribedOrThenedDeep,
} from '../types'

import { noop } from './noop'
import { then } from './then'
import { _Array } from './array'
import { isSubscribable, isThenable } from './is'

import type { ISignal } from '@rease/signal'
import { isSignal, signal, batch } from '@rease/signal'

function observablefyThenable<T>(promise: IThenable<T>) {
  return {
    subscribe<C>(cb: ISubscriber<T, C>, thisArg?: C) {
      return then(promise, cb, thisArg)
    },
  }
}

function _s1<T, C>(this: { f: ISubscriber<T, C>; c: C; s: ISignal<any>; u: any }, v: T) {
  // if (v !== this) this.f.call(this.c, v)
  if (v !== this) {
    // FIX
    // @ts-ignore
    const n = this.s._.p
    if (n && n.c === this) (n.f = this.f), (n.c = this.c)
    else console.error('rease: signal fix error')

    this.f.call(this.c, v)
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
  let uRes: IUnsubscriber
  if (isSignal(v)) {
    uRes = (v as any).subscribe(cb, thisArg)
  } else if (isSubscribable(v)) {
    const data = { f: cb, c: thisArg, s: null } as any
    data.s = signal(data as any)
    let u1: any = (v as any).subscribe(function (v: any) {
      data.s.set(v)
    })
    let u0 = data.s.subscribe(_s1, data)
    uRes = function () {
      u0(), u1.unsubscribe ? u1.unsubscribe() : u1(), (u0 = u1 = noop)
    }
  } else if (isThenable(v)) {
    uRes = then(v, _o1, { f: cb, c: thisArg })
  } else {
    uRes = noop
    batch(cb, thisArg!, [v as any])
  }
  return uRes
}
export function watchDeep<T, C = undefined>(
  v: T,
  cb: ISubscriber<ISubscribedOrThenedDeep<T>, C>,
  thisArg?: C
): IUnsubscriber {
  let uRes: IUnsubscriber
  if (isSubscribable(v) || (isThenable(v) && ((v = observablefyThenable(v) as any), true))) {
    const data = { f: cb, c: thisArg, s: null } as any
    data.s = signal(data as any)
    let u1 = _s2(v as any, data)
    let u0 = data.s.subscribe(_s1, data)
    uRes = function () {
      u0(), u1(), (u0 = u1 = noop)
    }
  } else {
    uRes = noop
    batch(cb, thisArg!, [v as any])
  }
  return uRes
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
    // data.s
    //   ? data.s.set(data.v.slice())
    //   : data.u.push((data.s = signal(data.v.slice())).subscribe(data.f, data.c))
  } else if (this.f && ((this.f = false), --data.l < 1)) {
    data.s.set(data.v.slice())
    data.u.push(data.s.subscribe(data.f, data.c))
    // batch(data.f, data.c, [data.v.slice()])
  }
}
function _w0(watchFn: typeof watchDeep | typeof watch) {
  return function (a: any, cb: any, thisArg: any): IUnsubscriber {
    let uRes: IUnsubscriber
    const l = a.length
    if (l > 0) {
      const u = _Array(l) as any[]
      const d = { l, v: _Array(l), u, s: signal(u), f: cb, c: thisArg }
      for (let i = 0; i < l; i++) u[i] = watchFn(a[i], _s3, { d, i, f: true })

      uRes = function () {
        for (; u.length > 0; ) u.pop()!()
      }
    } else {
      uRes = noop
      batch(cb, thisArg, [[]])
    }
    return uRes
  }
}
export const watchAll = _w0(watch) as <T extends readonly unknown[] | [], C = undefined>(
  a: T,
  cb: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThened<T[P]> }, C>,
  ctx?: C
) => IUnsubscriber

export const watchDeepAll = _w0(watchDeep) as <
  T extends readonly unknown[] | [],
  C = undefined
>(
  a: T,
  cb: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]> }, C>,
  ctx?: C
) => IUnsubscriber

// const $q = signal(1)
// const $w = signal(10)

// watchDeepAll([$q, $w], (v) => {
//   console.log(v)
// })

// batch(() => {
//   $q.$ *= 2
//   $w.$ *= 2
// })
