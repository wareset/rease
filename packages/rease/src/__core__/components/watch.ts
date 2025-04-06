import { Rease } from '../Rease'
import { isArray } from '../utils/array'

import type { ISubscribedOrThenedDeep } from '../types'

//
// RWatch
//
function watch(this: { r: Rease; f: any; t: any; c: any }, v: any) {
  this.r.destroyChildren()
  this.r.destroyed ||
    this.r.insert(
      this.f ? this.f.call(this.t !== void 0 ? this.t : this.r, v) : this.c
    )
}

export class RWatch<T = unknown, C = RWatch<T, any>> extends Rease {
  constructor(props: {
    this: T
    context?: C
    callback: T extends readonly unknown[] | []
      ? (
          this: C,
          value: { -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]> }
        ) => any
      : (this: C, value: ISubscribedOrThenedDeep<T>) => any
  })
  constructor(props: { this: any; children?: any })
  constructor(props: {
    this: any
    context?: any
    callback?: any
    children?: any
  }) {
    super()
    ;(this as any)[isArray(props.this) ? 'watchDeepAll' : 'watchDeep'](
      props.this,
      watch,
      {
        r: this,
        t: props.context,
        f: props.callback,
        c: props.children,
      }
    )
  }
}

// children
// callback
