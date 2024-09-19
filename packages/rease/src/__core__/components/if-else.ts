import { Rease } from '../Rease'
import { isFunction } from '../utils/is'

import type { ISubscriber, ISubscribedOrThenedDeep } from '../types'

//
// RIf RElseIf RElse
//
function watch(this: { r: Rease; t: any; b: boolean; c: any }, a: any[]) {
  if (
    this.b !==
    (this.b = a.every(function (v: any, k: number): any {
      return k > 0 ? !v : v
    }))
  ) {
    this.b
      ? this.r.insert(isFunction(this.c) ? this.c.call(this.t, a[0]) : this.c)
      : this.r.destroyChildren()
  }
}

function ifelseif(iam: Rease, context: any, children: any, a: any[]) {
  iam.watchDeepAll(a, watch, { r: iam, t: context, b: false, c: children })
}

function for_else(iam: RElseIf | RElse, is: any, context: any, children: any) {
  const prev = iam.findPrevSibling(_RIfElseIf_)
  ifelseif(iam, context, children, (iam._is = prev ? [is].concat(prev._is) : [is]))
}

class _RIfElseIf_ extends Rease {
  declare _is: any[]
  override move(): never {
    throw new Error('RIf, RElseIf and RElse is not move')
  }
}

export class RIf<T = unknown, C = undefined> extends _RIfElseIf_ {
  constructor({}: {
    is: T
    context?: C
    children?: ISubscriber<ISubscribedOrThenedDeep<T>, C>
  })
  constructor({ is, context, children }: { is: any; context?: any; children?: any }) {
    super()
    ifelseif(this, context, children, (this._is = [is]))
  }
}

export class RElseIf<T = unknown, C = undefined> extends _RIfElseIf_ {
  constructor({}: {
    is: T
    context?: C
    children?: ISubscriber<ISubscribedOrThenedDeep<T>, C>
  })
  constructor({ is, context, children }: { is: any; context?: any; children?: any }) {
    super()
    for_else(this, is, context, children)
  }
}

export class RElse<C = undefined> extends _RIfElseIf_ {
  constructor({}: { context?: C; children?: (this: C, value: true) => any })
  constructor({ context, children }: { context?: any; children?: any }) {
    super()
    for_else(this, true, context, children)
  }
}
