import { Rease } from '../Rease'
import { isArray } from '../utils/array'
import { isFunction } from '../utils/is'

import type { ISubscribedOrThenedDeep } from '../types'

//
// RWatch
//
function watch(this: { r: Rease; t: any; c: any }, v: any) {
  const { r: iam, t: ctx, c: children } = this
  iam.destroyChildren()
  iam.destroyed || iam.insert(isFunction(children) ? children.call(ctx, v) : children)
}

export class RWatch<T = unknown, C = undefined> extends Rease {
  constructor(props: {
    this: T
    context?: C
    children?: T extends readonly unknown[] | []
      ? (this: C, value: { -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]> }) => any
      : (this: C, value: ISubscribedOrThenedDeep<T>) => any
  })
  constructor(props: { this: any; children?: any })
  constructor(props: { this: any; context?: any; children?: any }) {
    super()
    ;(this as any)[isArray(props.this) ? 'watchDeepAll' : 'watchDeep'](props.this, watch, {
      r: this,
      t: props.context,
      c: props.children,
    })
  }
}

// new RWatch({ value: [12, ''] as const, children: (v) => console.log(v) })

// function rwatch(
//   iam: Rease,
//   value: any,
//   ctx: any,
//   children: any,
//   method: 'watch' | 'watchDeep' | 'watchAll' | 'watchDeepAll'
// ) {
//   ;(iam as any)[method](value, watch, { r: iam, t: ctx, c: children })
// }

// export class RWatch<T, C = undefined> extends Rease {
//   constructor({
//     value,
//     context,
//     children,
//   }: {
//     value: T
//     context?: C
//     children: ISubscriber<ISubscribedOrThened<T>, C>
//   })
//   constructor({ value, context, children }: { value: any; context?: any; children?: any }) {
//     super()
//     rwatch(this, value, context, children, 'watch')
//   }
// }

// export class RWatchDeep<T, C = undefined> extends Rease {
//   constructor({
//     value,
//     context,
//     children,
//   }: {
//     value: T
//     context?: C
//     children: ISubscriber<ISubscribedOrThenedDeep<T>, C>
//   })
//   constructor({ value, context, children }: { value: any; context?: any; children?: any }) {
//     super()
//     rwatch(this, value, context, children, 'watchDeep')
//   }
// }

// export class RWatchAll<T extends readonly unknown[] | [], C = undefined> extends Rease {
//   constructor({
//     value,
//     context,
//     children,
//   }: {
//     value: T
//     context?: C
//     children: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThened<T[P]> }, C>
//   })
//   constructor({ value, context, children }: { value: any; context?: any; children?: any }) {
//     super()
//     rwatch(this, value, context, children, 'watchAll')
//   }
// }

// export class RWatchDeepAll<T extends readonly unknown[] | [], C = undefined> extends Rease {
//   constructor({
//     value,
//     context,
//     children,
//   }: {
//     value: T
//     context?: C
//     children: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]> }, C>
//   })
//   constructor({ value, context, children }: { value: any; context?: any; children?: any }) {
//     super()
//     rwatch(this, value, context, children, 'watchDeepAll')
//   }
// }
