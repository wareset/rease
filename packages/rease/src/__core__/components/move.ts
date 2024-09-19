import type { ISubscribableOrThenableDeep } from '../types'
import { Rease } from '../Rease'

//
// RMove
//
function watch(this: any, a: any[]) {
  let { 0: to, 1: index } = a
  to || (to = this.p)
  this.r.move(to, index)
  this.c === void 0 || this.r.insert(this.c, (this.c = void 0))
}

export class RMove extends Rease {
  constructor({
    to,
    index,
    children,
  }: {
    to: ISubscribableOrThenableDeep<Rease>
    index?: ISubscribableOrThenableDeep<number>
    children?: any
  }) {
    super()
    this.watchDeepAll([to, index], watch, { r: this, p: this.parent, c: children })
  }
}
