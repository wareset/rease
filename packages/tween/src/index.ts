export * from './_raf'
export * from './_easing'

import { easeLinear } from './_easing'
import { requestAnimationFrame } from './_raf'

// x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y
/*
const is_not_equal_deep = (a: any, b: any) => {
  if (a === b ? a === 0 && 1 / a !== 1 / b : a === a || b === b) {
    if (a && b && typeof a === 'object' && typeof b === 'object') {
      for (let k in b) if (is_not_equal_deep(a[k], b[k])) return true
      return false
    }
    return true
  }
  return false
}
*/

/*
function interpolate(a: any, b: any, progress: number, easing: number) {
  if (a !== b && a === a) {
    let c = typeof a as any
    if (c === typeof b)
      switch (c) {
        case 'number':
          return progress < 1 ? easing * (b - a) + a : b
        case 'object':
          if (a && b) {
            for (const k in b) a[k] = interpolate(a[k], b[k], progress, easing)
            return a
          }
      }
  }
  return progress < 1 ? a : b
}
*/

function noop() {}
function select_val(a: any, b: any) {
  return a != null ? a : b
}
// function clamp(x: number, lower: number, upper: number): number {
//   return x < lower ? lower : x > upper ? upper : x
// }

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
function addInDblList(head: IDblList, f: any, c: any) {
  let sub: IDblList = { p: null as unknown as IDblList, n: null as unknown as IDblList, f, c }
  ;(sub.p = (sub.n = head).p).n = sub.n.p = sub
  return function () {
    if (sub) (sub.p.n = sub.n), (sub.n.p = sub.p), (sub.f = noop), (sub = null as any)
  }
}
function startDblList(head: IDblList | undefined, detail_1?: any, detail_2?: any) {
  if (head) for (let n = head; (n = n.n) !== head; ) n.f.call(n.c, detail_1, detail_2)
}
// IDblList
//

type IDBTaskCont = {
  p: IDBTaskCont
  n: IDBTaskCont
  s: ReaseTween<any>
  t: ITweenTask
}

let FST: IDBTaskCont
let queueNeedRun = false
export const TWEEN_DEFAULTS = {
  ticker(t: number) {
    if (FST) {
      for (let CUR = FST; (CUR = CUR.n) !== FST; ) calc(CUR, t)
      if ((queueNeedRun = FST.n !== FST)) requestAnimationFrame(TWEEN_DEFAULTS.ticker)
    }
  },
  paused: false,
  delay: 0,
  duration: 0,
  easing: easeLinear,
}

export type ITweenValue =
  | (readonly unknown[] | [])
  | { [key: string]: ITweenValue }
  | (
      | object
      | null
      | undefined
      | boolean
      | number
      | bigint
      | string
      | symbol
      | ((...a: any[]) => any)
    )

export type ITweenOptions = {
  delay?: number
  easing?: (n: number) => number
  duration?: number
}
type DeepPartial<T> = T extends object ? { [P in keyof T]?: DeepPartial<T[P]> } : T

export type ITweenTask<T extends ITweenValue = any> = {
  newValue: DeepPartial<T>
  executor: null | ((progress: number, easing: number) => any)

  passTime: number
  lastTime: number
  progress: number

  started: boolean
  skipped: boolean
} & Required<ITweenOptions>

function create_task(
  _: ReaseTween<any>['_'],
  newValue: DeepPartial<any>,
  options?: ITweenOptions
): ITweenTask {
  return {
    newValue,
    executor: null,

    delay: select_val(options && options.delay, _.delay),
    easing: select_val(options && options.easing, _.easing),
    duration: select_val(options && options.duration, _.duration),

    passTime: 0,
    lastTime: 0,
    progress: 0,

    started: false,
    skipped: false,
  }
}

function get_interpolator(a: any, b: any) {
  if (a !== b && a === a) {
    let c = typeof a as any
    if (c === typeof b)
      switch (c) {
        case 'number':
          c = b - a
          return function (p: number, e: number) {
            return p < 1 ? e * c + a : b
          }
        case 'object':
          if (a && b) {
            c = {}
            for (const k in b) c[k] = get_interpolator(a[k], b[k])
            return function (p: number, e: number) {
              for (const k in c) a[k] = c[k](p, e)
              return a
            }
          }
      }
  }
  return function (p: number) {
    return p < 1 ? a : b
  }
}

function remove_or_replace_task(_: ReaseTween<any>['_'], dbl: IDBTaskCont) {
  if (_.tasks.length) {
    const { 0: newValue, 1: options } = _.tasks.shift()!
    dbl.t = dbl.s.task = create_task(_, newValue, options)
  } else {
    ;(dbl.p.n = dbl.n), (dbl.n.p = dbl.p)
    dbl.s.task = null
  }
}

function calc(dbl: IDBTaskCont, t: number) {
  const task = dbl.t
  const self = dbl.s
  const _ = self._
  if (self.paused || TWEEN_DEFAULTS.paused) {
    task.lastTime = 0
  } else if (task.skipped) {
    task.started && startDblList(_.of, self.value, self)
    remove_or_replace_task(_, dbl)
  } else if (task.lastTime > 0) {
    if ((task.passTime -= task.lastTime - (task.lastTime = t)) >= task.delay) {
      let progress = (task.passTime - task.delay) / task.duration
      progress < 0 ? (progress = 0) : progress > 1 && (progress = 1)
      task.progress = progress

      // console.log(progress)

      task.started || ((task.started = true), startDblList(_.os, self.value, self))

      startDblList(
        _.ou,
        (self.value = (
          task.executor || (task.executor = get_interpolator(self.value, task.newValue))
        )(progress, task.easing(progress))),
        self
      )

      if (progress === 1) startDblList(_.of, self.value, self), remove_or_replace_task(_, dbl)

      // console.log(progress)
    }
  } else {
    task.lastTime = t
  }
}

class ReaseTween<T extends ITweenValue> {
  readonly _: {
    tasks: [DeepPartial<T>, ITweenOptions | undefined][]

    // onPause
    op?: IDblList
    // onResume
    or?: IDblList

    // onStart
    os?: IDblList
    // onUpdate
    ou?: IDblList
    // onFinal
    of?: IDblList
  } & Required<ITweenOptions>

  // current
  value: T
  task: null | ITweenTask<T>
  paused: boolean

  constructor(value: T, options?: ITweenOptions) {
    options || (options = {})
    this._ = {
      tasks: [],
      delay: select_val(options.delay, TWEEN_DEFAULTS.delay),
      easing: select_val(options.easing, TWEEN_DEFAULTS.easing),
      duration: select_val(options.duration, TWEEN_DEFAULTS.duration),
    }
    this.value = value
    this.task = null
    this.paused = false

    FST || ((FST = { p: null, n: null } as any), (FST.p = FST.n = FST))
  }

  to(newValue: DeepPartial<T>, options?: ITweenOptions) {
    if (this.task) this._.tasks.push([newValue, options])
    else {
      const task: IDBTaskCont = {
        s: this,
        p: null as unknown as IDBTaskCont,
        n: null as unknown as IDBTaskCont,
        t: (this.task = create_task(this._, newValue, options)),
      }
      ;(task.p = (task.n = FST).p).n = task.n.p = task
      queueNeedRun || ((queueNeedRun = true), requestAnimationFrame(TWEEN_DEFAULTS.ticker))
    }
    return this
  }

  skip() {
    if (this.task) this.task.skipped = true
    return this
  }

  clear() {
    this._.tasks.length = 0
    return this
  }

  purge() {
    return this.clear().skip()
  }

  pause() {
    this.paused || ((this.paused = !0), startDblList(this._.op, this.value, this))
    return this
  }
  resume() {
    this.paused && ((this.paused = !1), startDblList(this._.or, this.value, this))
    return this
  }

  onPause<C = undefined>(cb: (this: C, value: T, self: this) => any, thisArg?: C) {
    return addInDblList(this._.op || (this._.op = createDblList()), cb, thisArg)
  }
  onResume<C = undefined>(cb: (this: C, value: T, self: this) => any, thisArg?: C) {
    return addInDblList(this._.or || (this._.or = createDblList()), cb, thisArg)
  }

  onStart<C = undefined>(
    cb: (this: C, value: T, self: this & { task: ITweenTask<T> }) => any,
    thisArg?: C
  ) {
    return addInDblList(this._.os || (this._.os = createDblList()), cb, thisArg)
  }
  onUpdate<C = undefined>(
    cb: (this: C, value: T, self: this & { task: ITweenTask<T> }) => any,
    thisArg?: C
  ) {
    return addInDblList(this._.ou || (this._.ou = createDblList()), cb, thisArg)
  }
  onFinish<C = undefined>(
    cb: (this: C, value: T, self: this & { task: ITweenTask<T> }) => any,
    thisArg?: C
  ) {
    return addInDblList(this._.of || (this._.of = createDblList()), cb, thisArg)
  }
}

export type { ReaseTween as ITween }

export function tween<T extends ITweenValue>(value: T, options?: ITweenOptions) {
  return new ReaseTween(value, options)
}

// const q = new Tween(45)
