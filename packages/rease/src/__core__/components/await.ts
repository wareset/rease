import { Rease } from '../Rease'
import { noop } from '../utils/noop'
import { isFunction, isThenable, isCatchable } from '../utils/is'

import type { IThened } from '../types'

function insertChildren(iam: Rease, children: any, context: any, v: any) {
  console.log(111111111, iam)
  iam.destroyed || iam.insert(isFunction(children) ? children.call(context, v) : children)
}

function getIs(iam: _RAwaitThenCatch_, props: any): any {
  return (iam._is =
    'this' in props
      ? props.this
      : (props = iam.findPrevSibling(_RAwaitThenCatch_)) && props._is)
}

class _RAwaitThenCatch_ extends Rease {
  declare _is: any
}

export class RAwait<T = unknown, C = undefined> extends _RAwaitThenCatch_ {
  constructor(props: { this?: T; context?: C; children?: (this: C, value: T) => any })
  constructor(props: { this?: any; children?: any })
  constructor(props: { this?: any; context?: any; children?: any }) {
    super()
    const iam = this
    let is = getIs(iam, props)
    let isPromise = isThenable(is)
    if (isPromise) {
      function fn() {
        ;(isPromise = false), iam.destroyChildren()
      }
      isCatchable((is = is.then(fn))) && is.catch(fn)
      isPromise && insertChildren(iam, props.children, props.context, iam._is)
    }
  }
}

export class RThen<T = unknown, C = undefined> extends _RAwaitThenCatch_ {
  constructor(props: { this?: T; context?: C; children?: (this: C, value: IThened<T>) => any })
  constructor(props: { this?: any; children?: any })
  constructor(props: { this?: any; context?: any; children?: any }) {
    super()
    const iam = this
    let is = getIs(iam, props)
    function fn(v: any) {
      insertChildren(iam, props.children, props.context, v)
    }
    isThenable(is) ? isCatchable((is = is.then(fn))) && is.catch(noop) : fn(is)
  }
}

export class RCatch<T = unknown, C = undefined> extends _RAwaitThenCatch_ {
  constructor(props: { this?: T; context?: C; children?: (this: C, value: Error) => any })
  constructor(props: { this?: any; children?: any })
  constructor(props: { this?: any; context?: any; children?: any }) {
    super()
    const iam = this
    const is = getIs(iam, props)
    isCatchable(is) &&
      is.catch(function fn(v: any) {
        insertChildren(iam, props.children, props.context, v)
      })
  }
}
