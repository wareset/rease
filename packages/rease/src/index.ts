export * from '@rease/css'
export * from '@rease/listen'
export * from '@rease/signal'

export type {
  //
  ISubscriber,
  IUnsubscriber,
  //
  IThenable,
  ISubscribable,
  IMaybeThenable,
  IMaybeSubscribable,
  ISubscribableOrThenable,
  ISubscribableOrThenableDeep,
  IMaybeSubscribableOrThenable,
  IMaybeSubscribableOrThenableDeep,
  //
  IThened,
  ISubscribed,
  ISubscribedDeep,
  ISubscribedOrThened,
  ISubscribedOrThenedDeep,
} from './__core__'

export { isThenable, isSubscribable } from './__core__'

export { then, thenSafe, thenSafeAll, thenable, timeout, interval } from './__core__'

export { watch, watchDeep, watchAll, watchDeepAll } from './__core__'

export {
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
  RMove,
} from './__core__'

export { Rease } from './__core__'
export { createElement, createElement as h, render } from './__core__'

export { hash } from './__core__/hash'

export { toHTMLString } from './__core__/toHTMLString'
