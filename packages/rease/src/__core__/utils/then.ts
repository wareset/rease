import { IThenable, IThened } from '..'
import { isThenable } from '..'
import { noop } from '..'
import { _Array } from '..'
// import { batch, batchify } from '@rease/signal'

export function then<T, C = undefined>(
  v: IThenable<T>,
  onfulfilled: (this: C, value: T) => any,
  thisArg?: C
) {
  let u = noop as any
  v.then(function (v: any) {
    u &&
      (u(),
      (u = onfulfilled
        ? thenSafe(v, onfulfilled, ((onfulfilled = null as any), thisArg))
        : null))
  })
  return function () {
    u && (u(), (u = onfulfilled = null as any))
  }
}

export function thenSafe<T, C = undefined>(
  v: T,
  onfulfilled: (this: C, value: IThened<T>) => any,
  thisArg?: C
) {
  return isThenable(v)
    ? then(v as any, onfulfilled, thisArg)
    : (onfulfilled.call(thisArg!, v as any), noop)
}

function __tsa1(this: [any[], number, boolean, [number], Function, any], v: any) {
  this[0][this[1]] = v
  if (this[3][0] < 1 || (this[2] && ((this[2] = false), --this[3][0]) < 1)) {
    this[4].call(this[5], this[0])
  }
}
export function thenSafeAll<T extends readonly unknown[] | [], C = undefined>(
  a: T,
  cb: (this: C, a: { -readonly [P in keyof T]: IThened<T[P]> }) => any,
  thisArg?: C
) {
  const l = a.length
  if (l > 0) {
    const vals: any[] = [],
      cnt: [number] = [a.length]
    const u = _Array(l) as any[]
    for (let i = 0; i < l; i++)
      u[i] = thenSafe(a[i], __tsa1, [vals, i, true, cnt, cb, thisArg])
    return function () {
      for (; u.length > 0; ) u.pop()!()
    }
  } else {
    return cb.call(thisArg!, [] as any), noop
  }
}

// interface PromiseLikeResolveOnly<T, C> {
//   then<TResult1 = T>(
//     onfulfilled?: ((this: C, value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null
//   ): PromiseLikeResolveOnly<TResult1, C>
// }
function _thenable(this: { b: boolean; v: any; c: any; a: any[] | null }, v: any) {
  if (this.a) {
    this.v = v
    for (let a = this.a, i = 0, ai; i < a.length; i++) (ai = a[i])[0](ai[1].call(this.c, v))
    this.b = true
  }
}
export function thenable<T, C = unknown>(
  executor: (this: C, resolve: (value: T | PromiseLike<T>) => void) => any,
  thisArg?: C
) {
  const data = { b: false, v: null as any, c: thisArg, a: [] as [Function, Function][] | null }
  let u0 = noop as any
  executor.call(thisArg!, function (value?: any) {
    u0 && (u0(), (u0 = thenSafe(value, _thenable, data)))
  })
  function u() {
    u0 && (u0(), (data.a = u0 = null))
  }
  function t<R = T>(onfulfilled: (this: C, value: T) => R | PromiseLike<R>) {
    return thenable<R, C>(function (r) {
      if (data.a && onfulfilled) {
        data.a.push([r, onfulfilled]), data.b && r(onfulfilled.call(this, data.v))
      }
    }, thisArg)
  }
  u.then = t
  return u
}

// const qwe = thenable(
//   function (res) {
//     console.log(1212, this)
//     // setTimeout(() => {
//     res(4545)
//     res(1111)
//     // }, 1500)
//   },
//   [1, 2, 3, 4]
// )
//   .then(function (v) {
//     console.log(this, v)
//     return ''
//   })
//   .then(function (v) {
//     console.log(this, v)
//     return true
//   })
//   .then(function (v) {
//     console.log(this, v)
//     return 7878
//   })

// setTimeout(async () => {
//   const res = await qwe

//   qwe
//     .then(function (v) {
//       console.log(this, v)
//       return 8989
//     })
//     .then(async function (v) {
//       console.log(this, v)
//       await thenable((res) => res(12), { q: 5 })
//       return 9999
//     })
// }, 1000)

// интервал должен повтрять каллбеки
function timeout_and_interval_factory(
  _set: typeof setTimeout | typeof setInterval,
  _clear: typeof clearTimeout | typeof clearTimeout
) {
  return function <T, C = undefined>(ms?: number, cb?: () => T, thisArg?: C) {
    cb || (cb = noop as any)
    let c: any
    // prettier-ignore
    let t = thenable<T, C>(function (r) { c = _set(function () { r(cb!()) }, ms! | 0) }, thisArg!)
    // prettier-ignore
    const u = function () { t && (t(), _clear(c), (t = null as any)) }
    u.then = t.then
    return u // unknown as (() => void) & ReturnType<typeof thenable<T, C>>
  }
}

export const timeout = timeout_and_interval_factory(setTimeout, clearTimeout)
export const interval = timeout_and_interval_factory(setInterval, clearInterval)
