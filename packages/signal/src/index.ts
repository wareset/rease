function noop() {}
let LAST = 1 as any
let run_queue: any
let $batcher: any // ISignal<{ f: (v?: any) => any; c: any; a: any }>

let STORE = function (value: any, props: any) {
  interface ISubscriber {
    // next sub
    n: ISubscriber
    // prev sub
    p: ISubscriber
    // value
    v: any
    // callback
    f: (...a: any) => void
    // context
    c: any
  }

  interface IService {
    // last value
    v: any
    // allow for queue
    r: boolean
    n: ReaseSignal | null
    // i: number
    // subscribers items
    h: ISubscriber
    p: ISubscriber
    // if first subscriber
    f: ((iam: ReaseSignal<any>) => void | ((iam: ReaseSignal<any>) => void)) | null
    // if last unsubscriber
    l: ((iam: ReaseSignal<any>) => void) | null | void
    // preset
    o: ((newValue: any, oldValue: any) => any) | null
    c: IComputed | null
    // observe
    w: IComputed[] | null
  }

  interface IComputed {
    // d: number
    s: ReaseSignal
    // GVERSION
    g: any
    // need t
    t: boolean
    // computed
    c: (observed: any[] | null, value: any) => any
    // is changing
    l: number
    // watch
    i: ReaseSignal[]
    x: { g: any; v: any; u: typeof noop }[]
    // count
    // d: number
    // observe
    o: { v: any; b: boolean }[] | undefined | null
  }

  const _Array = Array
  const _Object = Object

  let GVERSION: any = {}
  let COMPUTED: IComputed | null = null

  const object_is =
    _Object.is ||
    (function (x, y) {
      return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y
    } as typeof Object.is)

  function THROW(s: string) {
    throw '@rease/signal: ' + s
  }

  function peek(a: { v: any; b: boolean }[]) {
    const l = a.length
    const res: any[] = _Array(l)
    for (let i = 0, v; i < l; i++) res[i] = (v = a[i]).b ? v.v.get() : v.v
    // for (let i = 0, v; i < l; i++) res[i] = isSignal((v = a[i])) ? v.get() : v
    return res
  }

  // let i = 0
  // let j = 0
  function computedTest(this: IComputed) {
    // console.log(111, ++i, j)
    const cmp = this
    if (cmp.l === 0 && cmp.g !== GVERSION && (cmp.t || cmp.s._.h === cmp.s._.h.n)) {
      // console.log(222, i, ++j)
      let value: any

      const items = cmp.i
      const cache = cmp.x
      let needUpdate = !cmp.g

      const COMPUTED_PREV = COMPUTED
      COMPUTED = null
      cmp.l++
      for (let i = 0, ii, c; i < cache.length; i++) {
        if ((c = (ii = items[i])._.c)) computedTest.call(c)
        if ((needUpdate = !object_is(cache[i].v, ii._value))) break
      }
      if (needUpdate) {
        value = cmp.c(cmp.o ? peek(cmp.o) : ((COMPUTED = cmp), null), cmp.s._value)
        COMPUTED = null
        for (let i = cache.length, ci; i-- > 0; ) {
          if ((ci = cache[i]).g === cmp.g || cmp.o) ci.v = items[i]._value
          else items.splice(i, 1), cache.splice(i, 1)[0].u()
        }
      }
      cmp.g = GVERSION
      cmp.t = false
      cmp.l--
      COMPUTED = COMPUTED_PREV
      if (needUpdate) {
        const iam = cmp.s
        const capture = iam._.o
        setValue(iam, capture ? capture(value, iam._value) : value)
        // cmp.s.set(value, security)
      }
    }
  }
  function computedTestFast(cmp: IComputed) {
    if (cmp.l === 0 && cmp.g !== GVERSION && cmp.t) {
      // batch(computedTest, null, [cmp])
      batch(computedTest, cmp)
    }
  }

  // function computedCheckBeforeSetBatch(cmp: IComputed) {
  //   const items = cmp.i
  //   const cache = cmp.x
  //   const COMPUTED_PREV = COMPUTED
  //   COMPUTED = null
  //   cmp.l++
  //   if (!cmp.g && !cmp.o) {
  //     COMPUTED = cmp
  //     cmp.c(cmp.s._value, null)
  //     COMPUTED = null
  //   }
  //   for (let i = 0, ii; i < cache.length; i++) {
  //     if ((ii = items[i])._.c) computedTest(ii._.c!)
  //     cache[i].v = ii._value
  //   }
  //   cmp.g = GVERSION
  //   cmp.t = false
  //   cmp.l--
  //   COMPUTED = COMPUTED_PREV
  // }
  // function computedCheckBeforeSet(cmp: IComputed) {
  //   if (cmp.l === 0 && cmp.g !== GVERSION) {
  //     batch(computedCheckBeforeSetBatch, null, [cmp])
  //   }
  // }

  // // let l = 0
  // function computedWatch(this: IComputed) {
  //   // console.log(333, ++l)
  //   if (this.l === 0 && this.g !== GVERSION && this.t) {
  //     if (this.d <= 0) {
  //       const items = this.i
  //       const cache = this.x
  //       this.d = 0
  //       for (let i = 0, ii, c; i < cache.length; i++) {
  //         if ((c = (ii = items[i])._.c)) computedTest(c)
  //         objectIs(cache[i].v, ii._value) || this.d++
  //       }
  //     }
  //     if (--this.d === 0) computedTest(this)
  //   }
  //   // computedTest(this)
  // }
  function computedItemSubscribe(cmp: IComputed, item: ReaseSignal) {
    cmp.l++
    const w = item._.w || (item._.w = [])
    const u = item.subscribe(computedTest, cmp)
    cmp.l--
    w.push(cmp)
    return function () {
      w.splice(w.lastIndexOf(cmp), 1), u()
    }
  }

  function computedFirstSub(cmp: IComputed) {
    const items = cmp.i
    const cache = cmp.x
    for (let i = 0, h = cmp.s._.h, ci; i < cache.length && h !== h.n; i++) {
      if ((ci = cache[i]).u === noop) ci.u = computedItemSubscribe(cmp, items[i])
    }
    cmp.t = true
    computedTest.call(cmp)
  }
  function computedLastSub(cmp: IComputed) {
    const cache = cmp.x
    for (let u, i = cache.length, h = cmp.s._.h, ci; i-- > 0 && h === h.n; ) {
      ;(u = (ci = cache[i]).u), (ci.u = noop), u()
    }
  }

  function computedItemCheck(cmp: IComputed, item: ReaseSignal) {
    if (cmp.s !== item) {
      const i = cmp.i.indexOf(item) as any
      if (i < 0) {
        cmp.i.push(item)
        cmp.x.push({
          g: cmp.g,
          v: computedItemCheck,
          u: cmp.s._.h === cmp.s._.h.n ? noop : computedItemSubscribe(cmp, item),
        })
      } else {
        cmp.x[i].g = cmp.g
      }
    }
  }

  function computedNeedTest(a: IComputed[] | null) {
    if (a)
      for (let i = a.length, ai; i-- > 0; )
        (ai = a[i]).t || ((ai.t = true), computedNeedTest(ai.s._.w))
  }

  function runsub(this: ReaseSignal, sub: any) {
    sub.v === runsub && sub.f.call(sub.c, (sub.v = this._value))
  }
  function subFirst(this: ReaseSignal, sub: any) {
    const _ = this._
    if (_.c) computedFirstSub(_.c)
    if (_.f) _.l = _.f(this)
    runsub.call(this, sub)
  }
  function subLast(this: ReaseSignal) {
    const _ = this._
    if (_.l) _.l(this)
    if (_.c) computedLastSub(_.c)
  }

  function _signalify($value$: any) {
    let u = noop as any
    function sub(v: any) {
      iam.set(v)
    }
    function uns() {
      const uns = u
      ;(u = noop), uns.unsubscribe ? uns.unsubscribe() : uns()
    }
    const iam = new STORE(void 0, {
      prepare() {
        return (u = $value$.subscribe(sub)), uns
      },
    })
    return iam
  }
  function setObserve(cmp: IComputed) {
    // cmp.i.length = 0
    // cmp.x.length = 0
    const a = cmp.o! as any[]
    const l = a.length
    const iam_o = _Array(l) as { v: any; b: boolean }[]
    for (let i = 0, v: any, b: boolean; i < l; i++) {
      if ((b = (v = a[i]) != null && typeof v.subscribe === 'function')) {
        isSignal(v) || (v = _signalify(v)), computedItemCheck(cmp, v)
      }
      iam_o[i] = { v, b }
    }
    cmp.o = iam_o
  }

  function setWithCaptureFirstBatch(this: ReaseSignal, value: any) {
    this._value = this._.o!(value, this._value)
  }
  function setWithCaptureBatch(this: ReaseSignal, value: any) {
    setValue(this, this._.o!(value, this._value))
  }
  function setValue(iam: ReaseSignal, value: any) {
    // if (_.c) computedCheckBeforeSet(_.c)
    if (!object_is(iam._value, value)) {
      ;(iam._value = value), (GVERSION = {})
      // iam._.c && (iam._.c.g = GVERSION)
      computedNeedTest(iam._.w), run_queue(iam)
    }
  }

  class ReaseSignal<T = unknown> {
    _: IService
    _value: T
    readonly computed?: boolean
    readonly prepared?: boolean
    readonly captured?: boolean

    constructor(
      value: T,
      props?: {
        prepare?: (iam: ReaseSignal<T>) => void | ((iam: ReaseSignal<T>) => void)
        capture?: (newValue: T, oldValue: T) => T
        compute?: (observe: any[] | null, value: T) => T
        observe?: any[]
      }
    ) {
      const _: IService = (this._ = {
        v: (this._value = value),
        c:
          props && props.compute
            ? ((this.computed = true),
              {
                // d: 0,
                s: this,
                g: null,
                t: true,
                l: 0,
                c: props.compute,
                i: [],
                x: [],
                o: props!.observe,
              })
            : null,
        h: { n: null, p: null } as unknown as ISubscriber,
        p: null as unknown as ISubscriber,
        r: true,
        n: null,
        // fst lst
        f: props && props.prepare ? ((this.prepared = true), props.prepare) : null,
        l: null,
        // pre ps
        o: props && props.capture ? ((this.captured = true), props.capture) : null,
        // computed list
        w: null,
      })
      _.p = _.h.n = _.h.p = _.h
      if (_.c && _.c.o) setObserve(_.c)
      if (_.o) batch(setWithCaptureFirstBatch, this, [value])
    }

    get() {
      const COMPUTED_PREV = COMPUTED
      COMPUTED = null
      if (COMPUTED_PREV) computedItemCheck(COMPUTED_PREV, this)
      const _ = this._
      const u =
        _.h === _.h.n && (_.c || _.f) ? this.subscribe(noop) : _.c && computedTestFast(_.c)
      const v = this._value
      if (u) u()
      COMPUTED = COMPUTED_PREV
      return v
    }

    set(value: T) {
      const _ = this._
      if (_.c) THROW('computed')
      if (_.o) batch(setWithCaptureBatch, this, [value])
      else setValue(this, value)
      return this
    }

    // get $() {
    //   return this.get()
    // }
    // set $(value: T) {
    //   this.set(value)
    // }

    subscribe<C>(callback: (this: C, value: T) => any, thisArg?: C) {
      const iam = this,
        _ = iam._
      let sub: ISubscriber | null = {
        n: null as any,
        p: null as any,
        v: runsub,
        f: callback,
        c: thisArg,
      }
      _.p = (sub.p = (sub.n = _.p.n).p).n = sub.n.p = sub
      batch(sub.n === sub.p && (_.c || _.f) ? subFirst : runsub, iam, [sub])
      return function () {
        if (sub) {
          ;(sub.p.n = sub.n), (sub.n.p = sub.p)
          ;(sub.f = noop), (sub = null)
          if (_.h === _.h.n && (_.c || _.l)) batch(subLast, iam)
        }
      }
    }

    // toString() {
    //   return this.get() + ''
    // }
    // valueOf() {
    //   return this.get()
    // }
    // toJSON() {
    //   return this.get()
    // }
    toString(...a: any): T extends { toString(...a: any): infer I } ? I : string
    toString(...a: any) {
      const v = this.get() as any
      return v == null || !v.toString ? '' + v : v.toString.apply(v, a)
    }
    valueOf(...a: any): T extends { valueOf(...a: any): infer I } ? I : T
    valueOf(...a: any) {
      const v = this.get() as any
      return v == null || !v.valueOf ? v : v.valueOf.apply(v, a)
    }
    toJSON(...a: any): T extends { toJSON(...a: any): infer I } ? I : T
    toJSON(...a: any) {
      const v = this.get() as any
      return v == null || !v.toJSON ? v : v.toJSON.apply(v, a)
    }
  }

  STORE = ReaseSignal
  const proto = STORE.prototype
  _Object.defineProperty(proto, '$', { get: proto.get, set: proto.set })

  $batcher = new STORE({ f: noop })
  $batcher.subscribe(function (v: any) {
    v.f.apply(v.c, v.a)
  })

  LAST = null
  let queue_count = 0
  run_queue = function (iam: ReaseSignal) {
    let _ = iam._
    if (_.r) {
      if (++queue_count > 4e4) THROW('looping')
      _.n = null
      _.r = false
      if (LAST) {
        LAST = LAST._.n = iam
      } else {
        LAST = iam
        for (let v: any; iam; iam = iam._.n!) {
          if (!object_is((_ = iam._).v, (_.v = v = iam._value)))
            for (let _h = _.h, _p = (_.p = _h); (_p = _.p.n) !== _h; ) {
              _.c && computedTest.call(_.c)
              object_is(v, iam._value)
                ? object_is((_.p = _p).v, v) || _p.f.call(_p.c, (_p.v = v))
                : ((_.v = v = iam._value), (_.p = _h))
            }
          _.r = true
        }
        LAST = null
        queue_count = 0
      }
    }
  }

  return new STORE(value, props)
} as any

//
//
// ISignalManually, ISignalComputed, IObserve, IObserveValues
//
declare class _ISignal<G> {
  // readonly computed?: true | undefined
  readonly prepared?: true
  readonly captured?: true
  private readonly _value: G
  subscribe<C>(callback: (this: C, value: G) => void, thisArg?: C): () => void
  toString(
    ...a: G extends { toString(...a: any): any } ? Parameters<G['toString']> : any
  ): G extends { toString(...a: any): infer I } ? I : string
  valueOf(
    ...a: G extends { valueOf(...a: any): any } ? Parameters<G['valueOf']> : any
  ): G extends { valueOf(...a: any): infer I } ? I : G
  toJSON(
    ...a: G extends { toJSON(...a: any): any } ? Parameters<G['toJSON']> : any
  ): G extends { toJSON(...a: any): infer I } ? I : G
}

export declare class ISignalComputed<G> extends _ISignal<G> {
  readonly computed: true
  get $(): G
  get(): G
}

export declare class ISignalManually<G, S = G> extends _ISignal<G> {
  readonly computed?: undefined
  get $(): G
  get(): G
  set $(v: G)
  set(v: S): this
}

export type ISignal<G, S = G> = ISignalComputed<G> | ISignalManually<G, S>

type IObserve = readonly unknown[] | [] | null
// prettier-ignore
type _ISubscribed<T> = T extends null | undefined
  ? T
  : T extends { subscribe(callback: infer F): any }
    ? F extends (value: infer V, ...args: any) => any
      ? V
      : never
    : T
type IObserveValues<O extends IObserve> = O extends null | undefined
  ? O
  : { -readonly [P in keyof O]: _ISubscribed<O[P]> }
//
// ISignalManually, ISignalComputed, IObserve, IObserveValues
//
//

//
//
// batch
//
function batch<C, F extends (this: C) => any>(func: F, thisArg?: C): void
function batch<C, F extends (this: C, ...a: any[]) => any>(
  func: F,
  thisArg: C,
  args: [...Parameters<F>]
): void
function batch(f: any, c: any, a?: any) {
  LAST ? f.apply(c, a) : (($batcher._value = { f, c, a }), run_queue($batcher))
}
export { batch }
//
// batch
//
//

//
//
// batchify
//
function _insideBatchify(this: any[]) {
  this[0] = this[0].apply(this[1], this[2])
}
function batchify<T extends (...a: any[]) => any>(fn: T): T
function batchify(fn: any) {
  return function (this: any, ...args: any[]) {
    return batch(_insideBatchify, (args = [fn, this, args])), args[0]
  }
}
export { batchify }
//
// batchify
//
//

//
//
// signal
//
function signal<G, S = G, O extends IObserve = null>(
  value: S,
  props: {
    prepare?: (iam: ISignalComputed<G>) => void | ((iam: ISignalComputed<G>) => void)
    compute: <V = G>(observe: IObserveValues<O>, value: V) => S
    observe?: O
    capture: (newValue: S, oldValue: G) => G
  }
): ISignalComputed<G>
function signal<G, O extends IObserve = null>(
  value: G,
  props: {
    prepare?: (iam: ISignalComputed<G>) => void | ((iam: ISignalComputed<G>) => void)
    compute: <V = G>(observe: IObserveValues<O>, value: V) => G
    observe?: O
  }
): ISignalComputed<G>
function signal<G, S = G>(
  value: S,
  props: {
    prepare?: (iam: ISignalManually<G, S>) => void | ((iam: ISignalManually<G, S>) => void)
    capture: (newValue: S, oldValue: G) => G
  }
): ISignalManually<G, S>
function signal<G>(
  value?: G,
  props?: {
    prepare?: (iam: ISignalManually<G>) => void | ((iam: ISignalManually<G>) => void)
  }
): ISignalManually<G>

function signal(value?: any, props?: any) {
  return new STORE(value, props)
}
export { signal }
//
// signal
//
//

// const $q = signal('', {
//   compute: ([a, b]) => a + b,
//   observe: [1, 10],
//   capture(v: number | string) {
//     return +v * 2
//   },
// })

//
//
// computed
//
/*
function computed<G = undefined, S = G, O extends IObserve = null>(
  observe: O,
  compute: (_: G | undefined, observe: IObserveValues<O>) => S,
  props: {
    prepare?: (iam: ISignalComputed<G>) => void | ((iam: ISignalComputed<G>) => void)
    capture: (newValue: S, oldValue: G | undefined) => G
  }
): ISignalComputed<G>
function computed<G = undefined, O extends IObserve = null>(
  observe: O,
  compute: (_: G | undefined, observe: IObserveValues<O>) => G,
  props?: {
    prepare?: (iam: ISignalComputed<G>) => void | ((iam: ISignalComputed<G>) => void)
  }
): ISignalComputed<G>
function computed(observe: any, compute: any, props: any) {
  return new STORE(void 0, {
    compute,
    observe,
    prepare: props && props.prepare,
    capture: props && props.capture,
  })
}
*/
function computed<G, O extends IObserve = null>(
  observe: O,
  compute: <V = G | undefined>(observe: IObserveValues<O>, value: V) => G,
  initValue?: G
): ISignalComputed<G>
function computed(observe: any, compute: any, initValue?: any) {
  return new STORE(initValue, { compute, observe })
}
export { computed }
//
// computed
//
//

// const $q = computed([1, 10], (_, [a, b]) => a + b + '')

//
//
// effect
//
function effect<G = undefined, O extends IObserve = null>(
  observe: O,
  compute: <V = G | undefined>(value: V, observe: IObserveValues<O>) => G,
  onChange?: (value: G) => any
): () => void
function effect(observe: any, compute: any, onChange: any) {
  return new STORE(void 0, { compute, observe }).subscribe(onChange || noop)
}
export { effect }
//
// effect
//
//

//
//
// isSignal, isSignalStrict, isSignalComputed
//
function isSignal<T = any>(thing: any): thing is ISignal<T> {
  return thing instanceof STORE
}
function isSignalManually<T = any>(thing: any): thing is ISignalManually<T> {
  return thing instanceof STORE && !thing._.c
}
function isSignalComputed<T = any>(thing: any): thing is ISignalComputed<T> {
  return thing instanceof STORE && !!thing._.c
}
export { isSignal, isSignalManually, isSignalComputed }

// Computed
// Computable

// useable
// managed
// availed
// variable
// installable
// available
// manuality
// manualable
// assignable
// Accessible
// Changeable
// Recordable
// Rewritable
// Modifiable
// enhanced
// Modified
// Manually
// Manualed
// mutated
// Accessed
// controlled
// recorded
// variable
// adjusted
// manually
// Writable
// Readable
// Standard
// Recorded
// Readonly
// Entirely
// totally
// mutable
// immutable
// changed
