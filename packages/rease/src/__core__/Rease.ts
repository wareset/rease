import type { ISubscribedOrThened, ISubscribedOrThenedDeep, ISubscriber } from '.'
import { IThened } from '.'

import { noop } from '.'
import { then, thenSafe, thenSafeAll } from '.'

import { isArray } from '.'
import { getPrototypeOf } from '.'
import { isString, isFunction, isThenable } from '.'
import { watch, watchDeep, watchAll, watchDeepAll } from '.'

import {
  // r-text r-element r-fragment
  RText,
  RElement,
  RFragment,
  // r-watch
  RWatch,
  // r-if r-else-if r-else
  RIf,
  RElseIf,
  RElse,
  // r-switch r-case
  RSwitch,
  RCase,
  // r-for-in r-for-of
  RForIn,
  RForOf,
  // r-move
  RMove
} from '.'

type IComponent<P extends { [key: string]: any } = any> =
  | ((this: Rease, props: P) => any)
  | { new (props: P): Rease }

class JSX<P extends { [key: string]: any } = any> {
  c: IComponent<P>
  p: P
  constructor(ctor: any, props: any) {
    ;(this.c = ctor), (this.p = props)
  }
}

//
// IDblList
type IDblList = {
  p: IDblList
  n: IDblList
  c: any
  f: (...a: any[]) => any
}
function createDblList() {
  const head = { p: null, n: null } as any
  return (head.p = head.n = head) as IDblList
}
function addHookInDblList(head: IDblList, f: any, c: any) {
  let sub: IDblList = { p: null as unknown as IDblList, n: null as unknown as IDblList, f, c }
  ;(sub.p = (sub.n = head).p).n = sub.n.p = sub
  return function () {
    if (sub) (sub.p.n = sub.n), (sub.n.p = sub.p), (sub.f = noop), (sub = null as any)
  }
}
// IDblList
//

//
//
// Watch
//
function preWatch(this: { r: Rease; d: any; a: any; f: any; c: any }, v: any) {
  ;(this.d.f = this.f).call((this.d.c = this.c), v), testRunOnReadyHead(this.r)
}
function runWatch(this: { f: Function; c: any }, v: any) {
  this.f.call(this.c, v)
}
function addWatch(iam: Rease, watchFn: Function, $val$: any, cb?: Function, thisArg?: any) {
  let u = noop
  if (!iam.destroyed) {
    iam._.$1++
    const data = { f: preWatch, c: { r: iam, d: null as any, f: cb || noop, c: thisArg } }
    data.c.d = data
    const un = watchFn($val$, runWatch, data)
    if (un !== noop) {
      let ud = noop
      u = function () {
        if (u !== noop) {
          ;(u = noop), ud(), un()
          data.f === preWatch && ((data.f = noop), testRunOnReadyHead(iam))
        }
      }
      ud = iam.onDestroy(u)
    }
  }
  return u
}
//
// Watch
//
//

//
//
// Await
//
function runAwait(this: { r: Rease; f: any; c: any }, v: any) {
  this.r && (this.f.call(this.c, v), testRunOnReadyHead(this.r), (this.r = null as any))
}
function addAwait(iam: Rease, awaitFn: Function, thing: any, cb?: Function, thisArg?: any) {
  let u = noop
  if (!iam.destroyed) {
    iam._.$1++
    const data = { r: iam, f: cb || noop, c: thisArg }
    const un = awaitFn(thing, runAwait, data)
    if (un !== noop) {
      // let ud = noop
      u = function () {
        if (u !== noop) {
          ;(u = noop), /* ud(), */ un()
          data.r && (testRunOnReadyHead(data.r), (data.r = null as any))
        }
      }
      // ud = iam.onDestroy(u)
    }
  }
  return u
}
//
// Await
//
//

function splice_child_from_parent(parent: Rease, idx: number) {
  // const idx = pc.lastIndexOf(child)
  if (idx > -1) {
    // @ts-ignore
    parent.children.splice(idx, 1)
    for (let a = parent._.in, j = a.length, aj; j--; ) (aj = a[j]).i > idx && aj.i--
  }
}

let PARENT: Rease | null = null
let PINDEX: number | undefined
function set_parent_prev_next(iam: Rease) {
  if (PARENT) {
    PARENT._.$1++
    // @ts-ignore
    iam.root = PARENT.root
    // @ts-ignore
    iam.parent = PARENT
    const pc = PARENT.children
    if (PINDEX === +PINDEX! && PINDEX < pc.length) {
      if ((PINDEX |= 0) < 0) PINDEX = 0
      // @ts-ignore
      if ((iam.prev = (iam.next = pc[PINDEX]).prev)) iam.prev.next = iam
      // @ts-ignore
      pc.splice(PINDEX, 0, iam)
      // @ts-ignore
      iam.next.prev = iam
    } else {
      // @ts-ignore
      iam.next = null
      // @ts-ignore
      PINDEX = pc.push(iam) - 1
      // @ts-ignore
      PINDEX ? ((iam.prev = pc[PINDEX - 1]).next = iam) : (iam.prev = null)
    }
    for (let a = PARENT._.in, j = a.length, aj; j--; ) (aj = a[j]).i < PINDEX || aj.i++
  } else {
    // @ts-ignore
    iam.root = iam
    // @ts-ignore
    iam.parent = iam.prev = iam.next = null
  }
  PARENT = null
  PINDEX = NaN
}
function insert(iam: Rease, res: Rease[], jsx: any, idx: { i: number | undefined }) {
  if (jsx !== void 0) {
    if (isArray(jsx)) {
      for (let i = 0; i < jsx.length && !iam.destroyed; i++) insert(iam, res, jsx[i], idx)
    } else if (!iam.destroyed) {
      jsx instanceof Rease
        ? jsx.destroyed || (res.push(jsx), jsx.move(iam, idx.i))
        : res.push(create_rease(jsx, iam, idx.i))
    }
  }
}

//
// runOnReady
function runOnReadyThen(this: Rease) {
  if (--this._.$2 < 1) (this._.$2 = NaN), this.parent && testRunOnReadyHead(this.parent)
}
function runOnReadyHook(iam: Rease, hook: any, thisArg: any) {
  if (isThenable((hook = hook.call(thisArg, iam))) && !iam.destroyed)
    iam._.$2++, then(hook, runOnReadyThen, iam)
}
function runOnReadyHead(iam: Rease) {
  const head = iam._.c2
  if (head) {
    iam._.c2 = null
    for (let n = head; (n = n.n) !== head && !iam.destroyed; ) runOnReadyHook(iam, n.f, n.c)
    runOnReadyThen.call(iam)
  }
}
// runOnReady
//

//
// runOnBeforeReady
function testRunOnReadyHead(iam: Rease) {
  if (--iam._.$1 < 1) (iam._.$1 = NaN), runOnReadyHead(iam)
}
// runOnBeforeReady
//

// function runOnMoveHooks(iam: Rease) {
//   for (let head = iam._.om, n = head; (n = n.n) !== head && !iam.destroyed; ) n.f.call(n.c, iam)
//   for (let a = iam.children.slice(), i = 0, l = a.length; i < l; i++) runOnMoveHooks(a[i])
// }
function runDestroyHooks(iam: Rease, head: IDblList | null) {
  if (head) for (let n = head; (n = n.n) !== head; ) n.f.call(n.c, iam)
}
function runEmitHooks(head: IDblList | undefined, iam: Rease, detail: any) {
  if (head) for (let n = head; (n = n.n) !== head && !iam.destroyed; ) n.f.call(n.c, iam, detail)
}

function runFuncComponentThen(this: Rease, jsx: any) {
  this.insert(jsx), this.init()
}
const Function_prototype = Function.prototype
function create_rease(jsx: any, parent: Rease | null, idx?: number) {
  let c: any, p: any
  if (jsx instanceof JSX) ({ c, p } = jsx)
  else if (isFunction(jsx)) (c = jsx), (p = {})
  else (c = RText), (p = { data: jsx })
  // jsx instanceof JSX || (jsx = { c: RText, p: { 'r-is': jsx } })

  // const _props = jsx.p
  // const props = {} as any
  // let k: string, v: any
  // let onMove, onBeforeReady, onReady, onBeforeDestroy, onDestroy
  // for (k in _props) {
  //   v = _props[k]
  //   switch (k) {
  //     // case 'r-onBeforeMove':
  //     //   this.onBeforeMove(v)
  //     //   break
  //     case 'r-onMove':
  //       onMove = v
  //       // this.onMove(v)
  //       break
  //     case 'r-onBeforeReady':
  //       onBeforeReady = v
  //       // this.onBeforeReady(v)
  //       break
  //     case 'r-onReady':
  //       onReady = v
  //       // this.onReady(v)
  //       break
  //     case 'r-onBeforeDestroy':
  //       onBeforeDestroy = v
  //       // this.onBeforeDestroy(v)
  //       break
  //     case 'r-onDestroy':
  //       onDestroy = v
  //       // this.onDestroy(v)
  //       break
  //     default:
  //       props[k] = v
  //   }
  // }

  let isClass = false
  for (let fn = c; fn; fn = getPrototypeOf(fn))
    if (fn === Function_prototype || (isClass = fn === Rease)) break

  PARENT = parent
  PINDEX = idx

  let iam: Rease
  if (isClass) {
    ;(iam = new c(p)).init()
  } else {
    ;(iam = new Rease()), (iam._.cr = c), ((iam as any)._name = c.name)
    if (isThenable((jsx = c.call(iam, p)))) then(jsx, runFuncComponentThen, iam)
    else runFuncComponentThen.call(iam, jsx)
  }

  // if (onMove) iam.onMove(onMove)
  // if (onBeforeReady) iam.onMove(onBeforeReady)
  // if (onReady) iam.onMove(onReady)
  // if (onBeforeDestroy) iam.onMove(onBeforeDestroy)
  // if (onDestroy) iam.onMove(onDestroy)

  return iam
}

// function normalize_idx(idx: number | undefined, l: number) {
//   return idx !== +idx! || idx > l ? l : (idx |= 0) < 0 ? ((idx = l - idx) < 0 ? 0 : idx) : idx
// }
function normalize_idx(i: number | undefined, l: number) {
  return typeof i === 'number' && i <= l ? ((i |= 0) < 0 ? ((i = l - i) < 0 ? 0 : i) : i) : l
}

class Rease {
  // @ts-ignore
  private readonly _name: string

  readonly _: {
    // onBeforeReady
    c1: boolean
    $1: number
    // onReady
    c2: IDblList | null
    $2: number
    // onBeforeDestroy
    d1: IDblList | null
    // onDestroy
    d2: IDblList | null
    // onMove
    // om: IDblList

    // get/set Context
    // cx: Map<any, any> | null

    // r-if
    if: any[]
    // ctor
    cr: Function
    // insert counters
    readonly in: { i: number }[] // [number][]
    // readonly ou: { [key: string]: IDblList }
    // events on capture
    readonly oc: { [key: string]: IDblList }
    readonly on: { [key: string]: IDblList }
  }

  // protected readonly _name: string
  readonly inited: boolean
  readonly destroyed: boolean
  // readonly loaded: boolean
  // readonly component: IComponent<P>

  readonly root!: Rease
  readonly children: Readonly<Rease[]>
  readonly parent!: Rease | null
  readonly prev!: Rease | null
  readonly next!: Rease | null

  // readonly shared: { [key: string]: unknown }

  constructor() {
    this._name = this.constructor.name

    this.inited = false
    this.destroyed = false

    this.children = []

    // this.root = parent ? parent.root : this
    // this.parent = parent || null
    // this.prev = null
    // this.next = null

    this._ = {
      c1: false,
      $1: 1,
      c2: createDblList(),
      $2: 1,
      d1: createDblList(),
      d2: createDblList(),
      // om: createDblList(),

      // cx: null,
      if: [],
      cr: this.constructor,
      in: [],
      oc: {},
      on: {}
    }

    set_parent_prev_next(this)
    // const _props = jsx.p
    // const props = {} as any
    // let k: string, v: any
    // for (k in _props) {
    //   v = _props[k]
    //   switch (k) {
    //     // case 'r-onBeforeMove':
    //     //   this.onBeforeMove(v)
    //     //   break
    //     case 'r-onMove':
    //       this.onMove(v)
    //       break
    //     case 'r-onBeforeReady':
    //       this.onBeforeReady(v)
    //       break
    //     case 'r-onReady':
    //       this.onReady(v)
    //       break
    //     case 'r-onBeforeDestroy':
    //       this.onBeforeDestroy(v)
    //       break
    //     case 'r-onDestroy':
    //       this.onDestroy(v)
    //       break
    //     default:
    //       props[k] = v
    //   }
    // }
    // if (isThenable((v = jsx.c.call(this, props)))) then(v, runComponentThen, this)
    // else runComponentThen.call(this, v)
  }

  init() {
    this._.c1 || ((this._.c1 = (this as any).inited = true), testRunOnReadyHead(this))
  }

  insert(jsx: any, idx?: number) {
    const res: Rease[] = []
    if (!this.destroyed && jsx !== void 0) {
      const ni = this._.in
      const n = { i: normalize_idx(idx, this.children.length) }
      ni.push(n), insert(this, res, jsx, n), ni.splice(ni.lastIndexOf(n), 1)
    }
    return res
  }
  splice(start: number, remove: number, jsx: any) {
    if (!this.destroyed && (jsx !== void 0 || remove)) {
      const ni = this._.in
      const n = { i: start }
      ni.push(n)
      const children = this.children.slice((start |= 0), remove + start)
      for (let i = children.length; i-- > 0; ) children[i].destroy()
      return this.insert(jsx, ni.splice(ni.lastIndexOf(n), 1)[0].i)
    }
    return [] as Rease[]
  }

  destroy() {
    if (!this.destroyed) {
      const _ = this._
      const $2 = _.$2
      _.c2 = null
      _.$1 = _.$2 = NaN
      // @ts-ignore
      this.destroyed = true
      runDestroyHooks(this, _.d1), (_.d1 = null)
      this.destroyChildren()
      // prettier-ignore
      const parent = this.parent, prev = this.prev, next = this.next
      // @ts-ignore
      this.parent = this.prev = this.next = null
      // @ts-ignore
      if (prev) prev.next = next
      // @ts-ignore
      if (next) next.prev = prev
      if (parent) {
        splice_child_from_parent(parent, parent.children.lastIndexOf(this))
      }
      runDestroyHooks(this, _.d2), (_.d2 = null)
      $2 && parent && testRunOnReadyHead(parent)
    }
  }
  destroyChildren() {
    for (let a = this.children.slice(), i = a.length; i-- > 0; ) a[i].destroy()
  }

  move(to: Rease | null, idx?: number) {
    if (!this.destroyed && (to ? !to.destroyed : this.parent)) {
      // prettier-ignore
      const parent = this.parent, prev = this.prev, next = this.next
      idx = to ? normalize_idx(idx, to.children.length) : 0
      if (parent) {
        const i = parent.children.indexOf(this)
        if (parent === to) {
          const l = parent.children.length
          idx < l || (idx = l - 1), idx > i && idx--
          if (idx === i) return false
        }
        splice_child_from_parent(parent, i)
      }
      // @ts-ignore
      if (prev) prev.next = next
      // @ts-ignore
      if (next) next.prev = prev
      PARENT = to
      PINDEX = idx
      set_parent_prev_next(this)
      this._.$1++
      const $2 = this._.$2
      this.emitDeep('move')
      // runOnMoveHooks(this)
      this.init()
      testRunOnReadyHead(this)
      if (parent === to) {
        to && testRunOnReadyHead(to)
      } else {
        $2 && parent && testRunOnReadyHead(parent)
        $2 || (to && testRunOnReadyHead(to))
      }
      return true
    }
    return false
  }

  //
  //
  // EVENTS
  //
  on<Detail, C = undefined>(
    type: string,
    cb: (this: C, iam: this, detail: Detail) => void,
    thisArg?: C,
    isCapture?: boolean | null
  ) {
    return !this.destroyed
      ? addHookInDblList(
          (isCapture = isCapture ? this._.oc : (this._.on as any))[type] ||
            ((isCapture as any)[type] = createDblList()),
          cb,
          thisArg
        )
      : noop
  }
  emit<Detail>(type: string, detail?: Detail, isCapture?: boolean | null) {
    if (isCapture != null) runEmitHooks((isCapture ? this._.oc : this._.on)[type], this, detail)
    else runEmitHooks(this._.oc[type], this, detail), runEmitHooks(this._.on[type], this, detail)
  }
  emitDeep<Detail>(type: string, detail?: Detail) {
    runEmitHooks(this._.oc[type], this, detail)
    const ni = this._.in
    const n = { i: 0 }
    ni.push(n)
    for (let a = this.children; n.i < a.length && !this.destroyed; n.i++)
      a[n.i].emitDeep(type, detail)
    ni.splice(ni.lastIndexOf(n), 1)
    runEmitHooks(this._.on[type], this, detail)
  }
  notifyParents<Detail>(type: string, detail?: Detail) {
    for (let parent: Rease | null = this; (parent = parent.parent); ) parent.emit(type, detail)
  }
  notifyChildren<Detail>(type: string, detail?: Detail) {
    const ni = this._.in
    const n = { i: 0 }
    ni.push(n)
    for (let a = this.children; n.i < a.length; n.i++) a[n.i].emitDeep(type, detail)
    ni.splice(ni.lastIndexOf(n), 1)
  }
  //
  // EVENTS
  //
  //

  //
  //
  // HOOKS
  //
  // onBeforeMove(hook: (iam: this) => any) {
  //   return hook !== noop && !this.destroyed ? addHookInDblList(this._.bm, hook) : noop
  // }
  onMove<C = undefined>(hook: (this: C, iam: this) => any, thisArg?: C) {
    return this.on('move', hook, thisArg, true)
  }

  onReady<C = undefined>(hook: (this: C, iam: this) => any, thisArg?: C) {
    return !this.destroyed
      ? this._.c2
        ? addHookInDblList(this._.c2, hook, thisArg)
        : (this._.$2 ? runOnReadyHook(this, hook, thisArg) : hook.call(thisArg!, this), noop)
      : noop
  }

  onBeforeDestroy<C = undefined>(hook: (this: C, iam: this) => any, thisArg?: C) {
    return this._.d1
      ? addHookInDblList(this._.d1, hook, thisArg)
      : (hook.call(thisArg!, this), noop)
  }
  onDestroy<C = undefined>(hook: (this: C, iam: this) => any, thisArg?: C) {
    return this._.d2
      ? addHookInDblList(this._.d2, hook, thisArg)
      : (hook.call(thisArg!, this), noop)
  }
  //
  // HOOKS
  //
  //

  //
  //
  // AWAIT
  //
  await<T, C = undefined>(
    thing: T,
    onfulfilled?: (this: C, value: IThened<T>) => any,
    thisArg?: C
  ) {
    return addAwait(this, thenSafe, thing, onfulfilled, thisArg)
  }
  awaitAll<T extends readonly unknown[] | [], C = undefined>(
    things: T,
    onfulfilled: (this: C, a: { -readonly [P in keyof T]: IThened<T[P]> }) => any,
    thisArg?: C
  ) {
    return addAwait(this, thenSafeAll, things, onfulfilled, thisArg)
  }
  //
  // AWAIT
  //
  //

  //
  //
  // WATCH
  //
  watch<T, C = undefined>($val$: T, cb?: ISubscriber<ISubscribedOrThened<T>, C>, thisArg?: C) {
    return addWatch(this, watch, $val$, cb, thisArg)
  }
  watchDeep<T, C = undefined>(
    $val$: T,
    cb?: ISubscriber<ISubscribedOrThenedDeep<T>, C>,
    thisArg?: C
  ) {
    return addWatch(this, watchDeep, $val$, cb, thisArg)
  }
  watchAll<T extends readonly unknown[] | [], C = undefined>(
    $vals$: T,
    cb?: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThened<T[P]> }, C>,
    thisArg?: C
  ) {
    return addWatch(this, watchAll, $vals$, cb, thisArg)
  }
  watchDeepAll<T extends readonly unknown[] | [], C = undefined>(
    $vals$: T,
    cb?: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]> }, C>,
    thisArg?: C
  ) {
    return addWatch(this, watchDeepAll, $vals$, cb, thisArg)
  }
  //
  // WATCH
  //
  //

  // setContext<T>(key: any, value: T) {
  //   ;(this._.cx || (this._.cx = new Map())).set(key, value)
  // }
  // getContext<T>(key: any) {
  //   for (let parent: Rease | null = this; parent; ) {
  //     if (parent._.cx && parent._.cx.has(key)) return parent._.cx.get(key) as T
  //     parent = parent.parent
  //   }
  // }

  //
  //
  // FIND
  //
  findParent<P extends Function>(parentCtor: FindsArg<P>) {
    const isAp = isArray(parentCtor)
    for (let p: Rease | null = this; (p = p.parent); )
      if (_find(isAp, p, parentCtor)) return p as FindsRes<P>
  }

  findFirstChild<C extends Function>(childCtor: FindsArg<C>, skipCtor?: FindsArg<Function>) {
    const isAc = isArray(childCtor)
    const isAs = skipCtor && isArray(skipCtor)
    for (let a = this.children, i = 0, l = a.length, child: any; i < l; i++) {
      if (
        _find(isAc, (child = a[i]), childCtor) ||
        (!(skipCtor && _find(isAs!, child, skipCtor)) &&
          (child = child.findFirstChild(childCtor, skipCtor)))
      )
        return child as FindsRes<C>
    }
  }
  findLastChild<C extends Function>(childCtor: FindsArg<C>, skipCtor?: FindsArg<Function>) {
    const isAc = isArray(childCtor)
    const isAs = skipCtor && isArray(skipCtor)
    for (let a = this.children, i = a.length, child: any; i-- > 0; ) {
      if (
        _find(isAc, (child = a[i]), childCtor) ||
        (!(skipCtor && _find(isAs!, child, skipCtor)) &&
          (child = child.findLastChild(childCtor, skipCtor)))
      )
        return child as FindsRes<C>
    }
  }

  findPrevSibling<S extends Function>(prevCtor: FindsArg<S>, skipCtor?: FindsArg<Function>) {
    const isAc = isArray(prevCtor)
    const isAs = skipCtor && isArray(skipCtor)
    for (let prev: Rease | null = this, sibling; (prev = prev.prev); ) {
      if (
        _find(isAc, (sibling = prev), prevCtor) ||
        (!(skipCtor && _find(isAs!, sibling, skipCtor)) &&
          (sibling = prev.findLastChild(prevCtor, skipCtor)))
      )
        return sibling as FindsRes<S>
    }
  }
  findNextSibling<S extends Function>(nextCtor: FindsArg<S>, skipCtor?: FindsArg<Function>) {
    const isAc = isArray(nextCtor)
    const isAs = skipCtor && isArray(skipCtor)
    for (let next: Rease | null = this, sibling; (next = next.next); ) {
      if (
        _find(isAc, (sibling = next), nextCtor) ||
        (!(skipCtor && _find(isAs!, sibling, skipCtor)) &&
          (sibling = next.findFirstChild(nextCtor, skipCtor)))
      )
        return sibling as FindsRes<S>
    }
  }

  findParentOrPrev<P extends Function, S extends Function>(
    parentCtor: FindsArg<P>,
    prevCtor: FindsArg<S>
  ) {
    let prev = this.findPrevSibling(prevCtor, parentCtor)
    if (prev) return { prev }
    const isAp = isArray(parentCtor)
    const isAc = isArray(prevCtor)
    for (let parent: Rease | null = this, child; (child = parent), (parent = parent.parent); ) {
      for (let a = parent.children, i = a.indexOf(child); i-- > 0; ) {
        if (
          _find(isAc, (prev = a[i] as FindsRes<S>), prevCtor) ||
          (!_find(isAp, prev, parentCtor) && (prev = prev.findLastChild(prevCtor, parentCtor)))
        )
          return { prev }
      }
      if (_find(isAp, parent, parentCtor)) return { parent: parent as FindsRes<P> }
    }
    return {}
  }
  findParentOrNext<P extends Function, S extends Function>(
    parentCtor: FindsArg<P>,
    nextCtor: FindsArg<S>
  ) {
    let next = this.findNextSibling(nextCtor, parentCtor)
    if (next) return { next }
    const isAp = isArray(parentCtor)
    const isAc = isArray(nextCtor)
    for (let parent: Rease | null = this, child; (child = parent), (parent = parent.parent); ) {
      for (let a = parent.children, i = a.lastIndexOf(child), l = a.length; ++i < l; ) {
        if (
          _find(isAc, (next = a[i] as FindsRes<S>), nextCtor) ||
          (!_find(isAp, next, parentCtor) && (next = next.findFirstChild(nextCtor, parentCtor)))
        )
          return { next }
      }
      if (_find(isAp, parent, parentCtor)) return { parent: parent as FindsRes<P> }
    }
    return {}
  }
  //
  // FIND
  //
  //
}
function _find<T extends Rease, C extends Function>(
  isArray: boolean,
  rease: T,
  ctor: C | C[]
): boolean
function _find(isArray: any, rease: any, ctor: any) {
  if (isArray) {
    for (let j = ctor.length; j--; )
      if (rease._.cr === ctor || rease instanceof ctor[j]) return true
    return false
  } else {
    return rease._.cr === ctor || rease instanceof ctor
  }
}

type FindsArg<T> = T | T[]
type FindsRes<T> = T extends { new (...a: any[]): infer R } ? (R extends Rease ? R : never) : Rease

function createElement<P extends { [key: string]: any }>(
  component: string | IComponent<P>,
  props: P | null,
  ...children: any[]
): JSX
function createElement(component: any, props: any, ...children: any[]) {
  props || (props = {})
  if (children.length) props.children = children.length > 1 ? children : children[0]
  // slice.call(arguments, 2)

  if (isString(component)) {
    switch (component) {
      case 'r-fragment':
        component = RFragment
        break
      case 'r-watch':
        component = RWatch
        break
      case 'r-if':
        component = RIf
        break
      case 'r-else-if':
        component = RElseIf
        break
      case 'r-else':
        component = RElse
        break
      case 'r-switch':
        component = RSwitch
        break
      case 'r-case':
        component = RCase
        break
      case 'r-for-in':
        component = RForIn
        break
      case 'r-for-of':
        component = RForOf
        break
      case 'r-move':
        component = RMove
        break
      case 'r-text':
        component = RText
        break
      case 'r-element':
        component = RElement
        break
      // case 'html':
      // case 'head':
      // case 'body':
      //   throw ctor
      default:
        props.node = component
        component = RElement
    }
  }

  return new JSX(component, props)
}

export { Rease, createElement }

export function render(node: HTMLElement | SVGElement | null, jsx: any) {
  // return new Rease(
  //   createElement(
  //     RRoot,
  //     node
  //       ? {
  //           flag: RElement,
  //           shared: { is: node.localName, node },
  //           children
  //         }
  //       : { children }
  //   )
  // )
  const root = new RElement({ node })
  root.insert(jsx)
  root.init()
  return root
}

// export const jsxRuntime = {
//   Fragment: RFragment,
//   jsxs: createElement,
//   jsx: createElement
// }
