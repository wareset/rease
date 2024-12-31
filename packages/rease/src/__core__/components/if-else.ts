import { Rease } from '../Rease'
import { isFunction } from '../utils/is'

import type { ISubscribedOrThenedDeep } from '../types'

//
// RIf RElseIf RElse
//
function watch(this: { r: Rease; t: any; f: any; c: any; b: boolean }, a: any[]) {
  if (
    this.b !==
    (this.b = a.every(function (v: any, k: number): any {
      return k > 0 ? !v : v
    }))
  ) {
    this.b
      ? this.r.insert(this.f ? this.f.call(this.t !== void 0 ? this.t : this.r, a[0]) : this.c)
      : this.r.destroyChildren()
  }
}

function ifelseif(iam: Rease, context: any, callback: any, children: any, a: any[]) {
  iam.watchDeepAll(a, watch, { r: iam, t: context, f: callback, c: children, b: false })
}

function for_else(iam: RElseIf | RElse, is: any, context: any, callback: any, children: any) {
  const prev = iam.findPrevSibling(_RIfElseIf_)
  ifelseif(iam, context, callback, children, (iam._is = prev ? [is].concat(prev._is) : [is]))
}

class _RIfElseIf_ extends Rease {
  declare _is: any[]
  override move(): never {
    throw new Error('RIf, RElseIf and RElse is not move')
  }
}

export class RIf<T = unknown, C = RIf<T, any>> extends _RIfElseIf_ {
  constructor(props: {
    this: T
    context?: C
    callback: (this: C, value: ISubscribedOrThenedDeep<T>) => any
  })
  constructor(props: { this: any; children?: any })
  constructor(props: { this: any; context?: any; callback?: any; children?: any }) {
    super()
    ifelseif(this, props.context, props.callback, props.children, (this._is = [props.this]))
  }
}

export class RElseIf<T = unknown, C = RElseIf<T, any>> extends _RIfElseIf_ {
  constructor(props: {
    this: T
    context?: C
    callback: (this: C, value: ISubscribedOrThenedDeep<T>) => any
  })
  constructor(props: { this: any; children?: any })
  constructor(props: { this: any; context?: any; callback?: any; children?: any }) {
    super()
    for_else(this, props.this, props.context, props.callback, props.children)
  }
}

export class RElse<C = RElse<any>> extends _RIfElseIf_ {
  constructor(props: { context?: C; callback: (this: C, value: true) => any })
  constructor(props: { children?: any })
  constructor(props: { context?: any; callback?: any; children?: any }) {
    super()
    for_else(this, true, props.context, props.callback, props.children)
  }
}
