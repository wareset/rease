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

import type { ISignalManually } from '@rease/signal'
import { isSignal, signal, batch } from '@rease/signal'

function observablefyThenable<T>(promise: IThenable<T>) {
  return {
    subscribe<C>(cb: ISubscriber<T, C>, thisArg?: C) {
      return then(promise, cb, thisArg)
    },
  }
}

function _s1<T, C>(
  this: { f: ISubscriber<T, C>; c: C; s: ISignalManually<any>; u: any },
  v: T
) {
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

function _s2(v: ISubscribable<any>, data: { f: any; c: any; s: ISignalManually<any> }) {
  let u0 = noop
  let u1: any = v.subscribe(function (v) {
    const uns0 = u0
    ;(u0 = noop), uns0()
    if (isSubscribable(v) || (isThenable(v) && ((v = observablefyThenable(v)), true))) {
      u0 = _s2(v as any, data)
    } else {
      data.s.set(v)
    }
  })
  return function () {
    const uns0 = u0
    const uns1 = u1
    ;(u0 = u1 = noop), uns0(), uns1.unsubscribe ? uns1.unsubscribe() : uns1()
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
      const uns0 = u0
      const uns1 = u1
      ;(u0 = u1 = noop), uns0(), uns1.unsubscribe ? uns1.unsubscribe() : uns1()
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
      const uns0 = u0
      const uns1 = u1
      ;(u0 = u1 = noop), uns0(), uns1()
    }
  } else {
    uRes = noop
    batch(cb, thisArg!, [v as any])
  }
  return uRes
}

function _s3(
  this: {
    d: { l: number; v: any[]; u: any[]; s: ISignalManually<any>; f: any; c: any }
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
function _w0(watchFn: typeof watch | typeof watchDeep) {
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
  thisArg?: C
) => IUnsubscriber

export const watchDeepAll = _w0(watchDeep) as <
  T extends readonly unknown[] | [],
  C = undefined
>(
  a: T,
  cb: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]> }, C>,
  thisArg?: C
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

function _W2(this: any, v: any) {
  v === this._ || this.f.call(this.c, v)
}

function _W1(this: { s: ISignalManually<any> | null }, v: any) {
  this.s!.set(v)
}

// function _W0(
//   watchFn: typeof watch | typeof watchDeep | typeof watchAll | typeof watchDeepAll
// ) {
//   let _Watcher: any
//   return function (v: any) {
//     _Watcher ||
//       (_Watcher = class Watcher<T> {
//         private _: { v: T; s: ISignalManually<any> | null }
//         constructor(v: T) {
//           this._ = { v, s: null }
//         }
//         subscribe(cb: any, thisArg?: any) {
//           const _ = this._
//           _.s ||
//             (_.s = signal(_, {
//               prepare(iam) {
//                 return (_.s = iam), iam.set(_), (watchFn as any)(_.v, _W1, _)
//               },
//             }))
//           return _.s.subscribe(_W2, { _, f: cb, c: thisArg })
//         }
//       })
//     return new _Watcher(v)
//   }
// }

// export const _watcher = _W0(watch) as <T>(v: T) => {
//   subscribe<C = undefined>(
//     cb: ISubscriber<ISubscribedOrThened<T>, C>,
//     thisArg?: C
//   ): IUnsubscriber
// }

// export const _watcherDeep = _W0(watchDeep) as <T>(v: T) => {
//   subscribe<C = undefined>(
//     cb: ISubscriber<ISubscribedOrThenedDeep<T>, C>,
//     thisArg?: C
//   ): IUnsubscriber
// }

// export const _watcherAll = _W0(watchAll) as <T extends readonly unknown[] | []>(
//   v: T
// ) => {
//   subscribe<C = undefined>(
//     cb: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThened<T[P]> }, C>,
//     thisArg?: C
//   ): IUnsubscriber
// }

// export const _watcherDeepAll = _W0(watchDeepAll) as <T extends readonly unknown[] | []>(
//   v: T
// ) => {
//   subscribe<C = undefined>(
//     cb: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]> }, C>,
//     thisArg?: C
//   ): IUnsubscriber
// }

class ReaseWatcher<T, S> {
  private _: {
    v: T
    s: ISignalManually<any> | null
    w: typeof watch | typeof watchDeep | typeof watchAll | typeof watchDeepAll
  }
  readonly deep: boolean
  readonly all: boolean
  constructor(v: T, w: ReaseWatcher<T, S>['_']['w'], deep: boolean, all: boolean) {
    this.deep = deep
    this.all = all
    this._ = { v, s: null, w }
  }
  subscribe<C = undefined>(cb: ISubscriber<S, C>, thisArg?: C) {
    const _ = this._
    _.s ||
      (_.s = signal(_, {
        prepare(iam) {
          return (_.s = iam), iam.set(_), (_.w as any)(_.v, _W1, _)
        },
      }))
    return _.s.subscribe(_W2, { _, f: cb, c: thisArg })
  }
  toJSON() {}
}

export function watcher<T>(v: T) {
  return new ReaseWatcher<T, ISubscribedOrThened<T>>(v, watch, false, false)
}
export function watcherDeep<T>(v: T) {
  return new ReaseWatcher<T, ISubscribedOrThenedDeep<T>>(v, watchDeep, true, false)
}
export function watcherAll<T extends readonly unknown[] | []>(v: T) {
  return new ReaseWatcher<T, { -readonly [P in keyof T]: ISubscribedOrThened<T[P]> }>(
    v,
    watchAll,
    false,
    true
  )
}
export function watcherDeepAll<T extends readonly unknown[] | []>(v: T) {
  return new ReaseWatcher<T, { -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]> }>(
    v,
    watchDeepAll,
    true,
    true
  )
}
