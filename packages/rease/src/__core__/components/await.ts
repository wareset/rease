import { Rease } from '../Rease'
import { noop } from '../utils/noop'
import { isFunction, isThenable, isCatchable } from '../utils/is'

import type { ISubscriber, IThened } from '../types'

function insertChildren(iam: Rease, children: any, context: any, v: any) {
  iam.destroyed || iam.insert(isFunction(children) ? children.call(context, v) : children)
}

export class RAwait<T = unknown, C = undefined> extends Rease {
  constructor({}: { is: T; context?: C; children?: ISubscriber<T, C> })
  constructor({}: { is: any; children?: any })
  constructor({ is, context, children }: { is: any; context?: any; children?: any }) {
    super()
    const iam = this
    let isPromise = isThenable(is)
    if (isPromise) {
      function fn() {
        ;(isPromise = false), iam.destroyChildren()
      }
      isCatchable((is = is.then(fn))) && is.catch(fn)
      isPromise && insertChildren(iam, children, context, is)
    }
  }
}

export class RThen<T = unknown, C = undefined> extends Rease {
  constructor({}: { is: T; context?: C; children?: ISubscriber<IThened<T>, C> })
  constructor({}: { is: any; children?: any })
  constructor({ is, context, children }: { is: any; context?: any; children?: any }) {
    super()
    const iam = this
    function fn(v: any) {
      insertChildren(iam, children, context, v)
    }
    isThenable(is) ? isCatchable((is = is.then(fn))) && is.catch(noop) : fn(is)
  }
}

export class RCatch<T = unknown, C = undefined> extends Rease {
  constructor({}: { is: T; context?: C; children?: ISubscriber<Error, C> })
  constructor({}: { is: any; children?: any })
  constructor({ is, context, children }: { is: any; context?: any; children?: any }) {
    super()
    const iam = this
    isCatchable(is) &&
      is.catch(function fn(v: any) {
        insertChildren(iam, children, context, v)
      })
  }
}
