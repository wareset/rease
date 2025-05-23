export * from '@rease/css'
export * from '@rease/listen'
export * from '@rease/signal'
export * from '@rease/tween'

export type {
  //
  ISubscriber,
  IUnsubscriber,
  //
  IThenable,
  ICatchable,
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
} from './__core__/types'

export {
  isString,
  isFunction,
  isThenable,
  isCatchable,
  isSubscribable,
} from './__core__/utils/is'

export {
  then,
  thenSafe,
  thenSafeAll,
  thenable,
  timeout,
  interval,
} from './__core__/utils/then'

export {
  watch,
  watchDeep,
  watchAll,
  watchDeepAll,
} from './__core__/utils/watch'
export {
  watcher,
  watcherDeep,
  watcherAll,
  watcherDeepAll,
} from './__core__/utils/watch'

export {
  // r-await t-then r-catch
  RAwait,
  RThen,
  RCatch,
  // r-for-in r-for-of
  RForIn,
  RForOf,
  // r-fragment
  RFragment,
  // r-xml r-text r-element
  RHtml,
  RText,
  RElement,
  // r-if r-else-if r-else
  RIf,
  RElseIf,
  RElse,
  // r-move
  RMove,
  // r-switch r-case
  RSwitch,
  RCase,
  // r-watch r-watch-deep r-watch-all r-watch-deep-all
  RWatch,
  // RWatchDeep,
  // RWatchAll,
  // RWatchDeepAll,
} from './__core__/components'

export { Rease } from './__core__/Rease'
export { createElement, createElement as h, render } from './__core__/Rease'

export { hash } from './__core__/hash'

export { toHTMLString } from './__core__/toHTMLString'
