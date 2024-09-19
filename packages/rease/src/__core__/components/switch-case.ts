import { Rease } from '../Rease'
import { noop } from '../utils/noop'
import { isFunction } from '../utils/is'
import { is as objectIs } from '../utils/object'

import type { ISubscriber, ISubscribedOrThenedDeep } from '../types'

//
// RSwitch
//
export class RSwitch extends Rease {
  _is: any
  constructor({ is, children }: { is: any; children?: any }) {
    super()
    this._is = is
    this.insert(children)
  }
}

//
// RCase
//
function watch(this: RCase['_ctx'], a: any[]) {
  this.i = true
  if (this.b !== (this.b = objectIs(a[0], a[1]))) {
    this.b
      ? this.r.insert(isFunction(this.c) ? this.c.call(this.t, a[0]) : this.c)
      : this.r.destroyChildren()
  }
}
function move(this: RCase) {
  const { _is, _ctx } = this
  const parent = this.findParent(RSwitch)
  if (parent !== this._switch) {
    this._switch = parent
    ;(_ctx.i = false), _ctx.u()
    if (parent) _ctx.u = this.watchDeepAll([parent._is, _is], watch, _ctx)
    if (!_ctx.i && _ctx.b) (_ctx.b = false), this.destroyChildren()
  }
}

export class RCase<T = unknown, C = undefined> extends Rease {
  _is: any
  _ctx: { r: RCase; t: any; b: boolean; c: any; i?: any; u: typeof noop }
  _switch?: RSwitch | undefined

  constructor({}: {
    is: T
    context?: C
    children?: ISubscriber<ISubscribedOrThenedDeep<T>, C>
  })
  constructor({ is, context, children }: { is: any; context?: any; children?: any }) {
    // @ts-ignore
    super()
    this._is = is
    this._ctx = { r: this, t: context, b: false, c: children, i: false, u: noop }
    this.onMove(move, this), move.call(this)
  }
}
