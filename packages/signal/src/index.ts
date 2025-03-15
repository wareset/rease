function noop() {}
let LAST_ = 1 as any
let run_queue: any
let $batcher_: any // ISignal<{ f: (v?: any) => any; c: any; a: any }>

let SECURE: any
const SECURE_CONST = {}
function service(iam: any) {
  return SECURE ? null : ((SECURE = SECURE_CONST), (iam = iam._()), (SECURE = null), iam)
}

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
    s: ReaseSignal
    // defense
    d: null | ((sec: any) => any)
    // value
    v: any
    // last value
    q: any
    // allow for queue
    r: boolean
    n: IService | null
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
    // s: ReaseSignal
    _: IService
    // GVERSION
    g: any
    // need t
    t: boolean
    // computed
    c: (observed: any[] | null, value: any) => any
    // is changing
    l: number
    // watch
    i: IService[]
    x: { g: any; v: any; u: typeof noop }[]
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
  function computedTestBase(this: IComputed) {
    // console.log(111, ++i, j)
    const cmp = this
    if (cmp.g !== GVERSION && cmp.l === 0 && (cmp.t || cmp._.h === cmp._.h.n)) {
      // console.log(222, i, ++j)
      let value: any

      const items = cmp.i
      const cache = cmp.x
      let needUpdate = !cmp.g

      const COMPUTED_PREV = COMPUTED
      COMPUTED = null
      cmp.l++
      for (let i = 0, i_; i < cache.length; i++) {
        if ((i_ = items[i]).c) computedTestBase.call(i_.c)
        if ((needUpdate = !object_is(cache[i].v, i_.v))) break
      }
      if (needUpdate) {
        value = cmp.c(cmp.o ? peek(cmp.o) : ((COMPUTED = cmp), null), cmp._.v)
        COMPUTED = null
        for (let i = cache.length, ci; i-- > 0; ) {
          if ((ci = cache[i]).g === cmp.g || cmp.o) ci.v = items[i].v
          else items.splice(i, 1), cache.splice(i, 1)[0].u()
        }
      }
      cmp.g = GVERSION
      cmp.t = false
      cmp.l--
      COMPUTED = COMPUTED_PREV
      if (needUpdate) {
        const _ = cmp._
        const capture = _.o
        setValue(_, capture ? capture(value, _.v) : value)
      }
    }
  }
  function computedTestFast(cmp: IComputed) {
    if (cmp.g !== GVERSION && cmp.l === 0 && cmp.t) {
      // batch(computedTest, null, [cmp])
      batch(computedTestBase, cmp)
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
  //     cmp.c(cmp.s._.v, null)
  //     COMPUTED = null
  //   }
  //   for (let i = 0, ii; i < cache.length; i++) {
  //     if ((ii = items[i])._.c) computedTestBase(ii._.c!)
  //     cache[i].v = ii._.v
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
  //         if ((c = (ii = items[i])._.c)) computedTestBase(c)
  //         objectIs(cache[i].v, ii._.v) || this.d++
  //       }
  //     }
  //     if (--this.d === 0) computedTestBase(this)
  //   }
  //   // computedTestBase(this)
  // }
  function computedItemSubscribe(cmp: IComputed, item_: IService) {
    cmp.l++
    const w = item_.w || (item_.w = [])
    const u = item_.s.subscribe(computedTestBase, cmp)
    cmp.l--
    w.push(cmp)
    return function () {
      w.splice(w.lastIndexOf(cmp), 1), u()
    }
  }

  function computedFirstSub(cmp: IComputed) {
    const items = cmp.i
    const cache = cmp.x
    for (let i = 0, h = cmp._.h, ci; i < cache.length && h !== h.n; i++) {
      if ((ci = cache[i]).u === noop) ci.u = computedItemSubscribe(cmp, items[i])
    }
    cmp.t = true
    computedTestBase.call(cmp)
  }
  function computedLastSub(cmp: IComputed) {
    const cache = cmp.x
    for (let u, i = cache.length, h = cmp._.h, ci; i-- > 0 && h === h.n; ) {
      ;(u = (ci = cache[i]).u), (ci.u = noop), u()
    }
  }

  function computedItemCheck(cmp: IComputed, item_: IService) {
    if (cmp._ !== item_) {
      const i = cmp.i.indexOf(item_) as any
      if (i < 0) {
        cmp.i.push(item_)
        cmp.x.push({
          g: cmp.g,
          v: computedItemCheck,
          u: cmp._.h === cmp._.h.n ? noop : computedItemSubscribe(cmp, item_),
        })
      } else {
        cmp.x[i].g = cmp.g
      }
    }
  }

  function computedNeedTest(a: IComputed[] | null) {
    if (a)
      for (let i = a.length, ai; i-- > 0; )
        (ai = a[i]).t || ((ai.t = true), computedNeedTest(ai._.w))
  }

  function runsub(this: IService, sub: any) {
    sub.v === runsub && sub.f.call(sub.c, (sub.v = this.v))
  }
  function subFirst(this: IService, sub: any) {
    if (this.c) computedFirstSub(this.c)
    if (this.f) this.l = this.f(this.s)
    runsub.call(this, sub)
  }
  function subLast(this: IService) {
    if (this.l) this.l(this.s)
    if (this.c) computedLastSub(this.c)
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
        isSignal(v) || (v = _signalify(v)), computedItemCheck(cmp, service(v))
      }
      iam_o[i] = { v, b }
    }
    cmp.o = iam_o
  }

  function setWithCaptureFirstBatch(this: IService, value: any) {
    this.s._value = this.v = this.o!(value, this.v)
  }
  function setWithCaptureBatch(this: IService, value: any) {
    setValue(this, this.o!(value, this.v))
  }
  function setValue(_: IService, value: any) {
    // if (_.c) computedCheckBeforeSet(_.c)
    if (!object_is(_.v, value)) {
      ;(_.s._value = _.v = value), (GVERSION = {})
      // iam._.c && (iam._.c.g = GVERSION)
      computedNeedTest(_.w), run_queue(_)
    }
  }
  function createDefence(defense: any) {
    return function (sec: any) {
      object_is(sec, defense) || THROW('defense')
    }
  }

  class ReaseSignal<T = unknown> {
    private _: () => any
    _value: T
    readonly computed?: boolean
    readonly prepared?: boolean
    readonly captured?: boolean
    readonly defensed?: boolean

    constructor(
      value: T,
      props?: {
        prepare?: (iam: ReaseSignal<T>) => void | ((iam: ReaseSignal<T>) => void)
        capture?: (newValue: T, oldValue: T) => T
        captureInitial?: boolean
        compute?: (observe: any[] | null, value: T) => T
        observe?: any[]
        defense?: any
      }
    ) {
      const _: IService = {
        s: this,
        v: (this._value = value),
        q: value,
        d:
          props && !props.compute && props.defense !== void 0
            ? ((this.defensed = true), createDefence(props.defense))
            : null,
        c:
          props && props.compute
            ? ((this.computed = true),
              {
                // s: this,
                _: null as unknown as IService,
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
      }
      this._ = function () {
        return SECURE === SECURE_CONST && _
      }
      _.p = _.h.n = _.h.p = _.h
      _.c && ((_.c._ = _), _.c.o && setObserve(_.c))
      _.o && props!.captureInitial && batch(setWithCaptureFirstBatch, _, [value])
    }

    get() {
      const _ = service(this) as IService
      const COMPUTED_PREV = COMPUTED
      COMPUTED = null
      if (COMPUTED_PREV) computedItemCheck(COMPUTED_PREV, _)
      const u =
        _.h === _.h.n && (_.c || _.f) ? this.subscribe(noop) : _.c && computedTestFast(_.c)
      const v = _.v
      if (u) u()
      COMPUTED = COMPUTED_PREV
      return v
    }

    set(value: T, sec?: any) {
      const _ = service(this) as IService
      _.c ? THROW('computed') : _.d && _.d(sec)
      _.o ? batch(setWithCaptureBatch, _, [value]) : setValue(_, value)
      return this
    }

    // get $() {
    //   return this.get()
    // }
    // set $(value: T) {
    //   this.set(value)
    // }

    subscribe<C>(callback: (this: C, value: T) => any, thisArg?: C) {
      const _ = service(this) as IService
      let sub: ISubscriber | null = {
        n: null as any,
        p: null as any,
        v: runsub,
        f: callback,
        c: thisArg,
      }
      _.p = (sub.p = (sub.n = _.p.n).p).n = sub.n.p = sub
      batch(sub.n === sub.p && (_.c || _.f) ? subFirst : runsub, _, [sub])
      return function () {
        if (sub) {
          ;(sub.p.n = sub.n), (sub.n.p = sub.p)
          ;(sub.f = noop), (sub = null)
          if (_.h === _.h.n && (_.c || _.l)) batch(subLast, _)
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

  $batcher_ = service(new STORE({ f: noop })) as IService
  $batcher_.s.subscribe(function (v: any) {
    v.f.apply(v.c, v.a)
  })

  LAST_ = null
  let queue_count = 0
  run_queue = function (_: IService) {
    if (_.r) {
      if (++queue_count > 4e4) THROW('looping')
      _.n = null
      _.r = false
      if (LAST_) {
        LAST_ = LAST_.n = _
      } else {
        LAST_ = _
        for (let v: any; _; _ = _.n!) {
          if (!object_is(_.q, (_.q = v = _.v)))
            for (let _h = _.h, _p = (_.p = _h); (_p = _.p.n) !== _h; ) {
              _.c && computedTestBase.call(_.c)
              object_is(v, _.v)
                ? object_is((_.p = _p).v, v) || _p.f.call(_p.c, (_p.v = v))
                : ((_.q = v = _.v), (_.p = _h))
            }
          _.r = true
        }
        LAST_ = null
        queue_count = 0
      }
    }
  }

  return new STORE(value, props)
} as any

//
//
// ISignalStandard, ISignalComputed, IObserve, IObserveValues
//
declare class _ISignal<G> {
  // readonly computed?: true | undefined
  readonly prepared?: true | undefined
  readonly captured?: true | undefined
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
  readonly defensed?: undefined
  get $(): G
  get(): G
}
export declare class ISignalDefensed<G, S = G> extends _ISignal<G> {
  readonly computed?: undefined
  readonly defensed: true
  get $(): G
  get(): G
  set(v: S, pass: any): this
}
export declare class ISignalStandard<G, S = G> extends _ISignal<G> {
  readonly computed?: undefined
  readonly defensed?: undefined
  get $(): G
  get(): G
  set $(v: G)
  set(v: S): this
}

export type ISignal<G, S = G> =
  | ISignalComputed<G>
  | ISignalDefensed<G, S>
  | ISignalStandard<G, S>

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
// ISignalStandard, ISignalComputed, IObserve, IObserveValues
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
  LAST_ ? f.apply(c, a) : (($batcher_.v = { f, c, a }), run_queue($batcher_))
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
/*@__NO_SIDE_EFFECTS__*/
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
// ISignalComputed
function signal<G, S = G, O extends IObserve = null>(
  value: S,
  props: {
    prepare?: (iam: ISignalComputed<G>) => void | ((iam: ISignalComputed<G>) => void)
    compute: (observe: IObserveValues<O>, oldValue: G) => S
    observe?: O
    capture: (newValue: S, oldValue: G | S) => G
    captureInitial: true
    defense?: undefined
  }
): ISignalComputed<G>
function signal<G, S = G, O extends IObserve = null>(
  value: G,
  props: {
    prepare?: (iam: ISignalComputed<G>) => void | ((iam: ISignalComputed<G>) => void)
    compute: (observe: IObserveValues<O>, oldValue: G) => S
    observe?: O
    capture: (newValue: S, oldValue: G) => G
    captureInitial?: false
    defense?: undefined
  }
): ISignalComputed<G>
function signal<G, O extends IObserve = null>(
  value: G,
  props: {
    prepare?: (iam: ISignalComputed<G>) => void | ((iam: ISignalComputed<G>) => void)
    compute: (observe: IObserveValues<O>, oldValue: G) => G
    observe?: O
    defense?: undefined
  }
): ISignalComputed<G>

// ISignalStandard
function signal<G, S = G>(
  value: G | S,
  props: {
    prepare?: (iam: ISignalStandard<G, S>) => void | ((iam: ISignalStandard<G, S>) => void)
    capture: (newValue: G | S, oldValue: G | S) => G
    captureInitial: true
    defense?: undefined
  }
): ISignalStandard<G, S>
function signal<G, S = G>(
  value: G,
  props: {
    prepare?: (iam: ISignalStandard<G, S>) => void | ((iam: ISignalStandard<G, S>) => void)
    capture: (newValue: G | S, oldValue: G) => G
    captureInitial?: false
    defense?: undefined
  }
): ISignalStandard<G, S>

// ISignalDefensed
function signal<G, S = G>(
  value: S,
  props: {
    prepare?: (iam: ISignalDefensed<G, S>) => void | ((iam: ISignalDefensed<G, S>) => void)
    capture: (newValue: G | S, oldValue: G | S) => G
    captureInitial: true
    defense: null | object | boolean | number | bigint | string | symbol
  }
): ISignalDefensed<G, S>
function signal<G, S = G>(
  value: G,
  props: {
    prepare?: (iam: ISignalDefensed<G, S>) => void | ((iam: ISignalDefensed<G, S>) => void)
    capture: (newValue: S, oldValue: G) => G
    captureInitial?: false
    defense: null | object | boolean | number | bigint | string | symbol
  }
): ISignalDefensed<G, S>

// ISignalDefensed
function signal<G>(
  value: G,
  props: {
    prepare?: (iam: ISignalDefensed<G>) => void | ((iam: ISignalDefensed<G>) => void)
    defense: null | object | boolean | number | bigint | string | symbol
  }
): ISignalDefensed<G>

// ISignalStandard
function signal<G>(
  value?: G,
  props?: {
    prepare?: (iam: ISignalStandard<G>) => void | ((iam: ISignalStandard<G>) => void)
    defense?: undefined
  }
): ISignalStandard<G>

/*@__NO_SIDE_EFFECTS__*/
function signal(value?: any, props?: any) {
  return new STORE(value, props)
}
export { signal }
//
// signal
//
//

// const $q = signal<number>(12, {
//   // compute: ([a, b]) => a + b,
//   // observe: [1, 10],
//   captureInitial: true,
//   capture(v, _o) {
//     return v
//   },
// })
// $q.$ = 1

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
  compute: (observe: IObserveValues<O>, value: G) => G,
  initValue: G
): ISignalComputed<G>
function computed<G, O extends IObserve = null>(
  observe: O,
  compute: (observe: IObserveValues<O>, value: G | undefined) => G
): ISignalComputed<G>
/*@__NO_SIDE_EFFECTS__*/
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
/*@__NO_SIDE_EFFECTS__*/
function isSignal<T>(thing: any): thing is ISignal<T> {
  return thing instanceof STORE
}
/*@__NO_SIDE_EFFECTS__*/
function isSignalComputed<G>(thing: any): thing is ISignalComputed<G> {
  return thing instanceof STORE && !!service(thing).c
}
/*@__NO_SIDE_EFFECTS__*/
function isSignalDefensed<G, S = G>(thing: any): thing is ISignalDefensed<G, S> {
  return thing instanceof STORE && !!service(thing).d
}
/*@__NO_SIDE_EFFECTS__*/
function isSignalStandard<G, S = G>(thing: any): thing is ISignalStandard<G, S> {
  return thing instanceof STORE && ((thing = service(thing)), !thing.c && !thing.d)
}
export { isSignal, isSignalStandard, isSignalComputed, isSignalDefensed }

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
// Openness
// Available
// availing
// availably
// permitted
// resolved
// Manually
// Manualed
// Communal
// freeware
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
