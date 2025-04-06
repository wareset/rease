export type IUnsubscriber = () => any

export interface ISubscribable<T> {
  subscribe(
    subscriber: (value: T, ...args: any) => any
  ): IUnsubscriber | { unsubscribe: IUnsubscriber }
}

export interface IThenable<T> {
  then(resolver: (value: T, ...args: any) => any): any
}
export interface ICatchable<T> {
  catch(resolver: (error: T, ...args: any) => any): any
}

export type IMaybeThenable<T> = T | IThenable<T>

export type IMaybeSubscribable<T> = T | ISubscribable<T>

export type ISubscribableOrThenable<T> = ISubscribable<T> | IThenable<T>

export type IMaybeSubscribableOrThenable<T> =
  | T
  | ISubscribable<T>
  | IThenable<T>

// prettier-ignore
export type ISubscribableOrThenableDeep<T> =
  | ISubscribableOrThenable<T>
  | ISubscribableOrThenable<ISubscribableOrThenable<T>>
  | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<T>
    >>
  | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
    ISubscribableOrThenable<T>
    >>>
  | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
    ISubscribableOrThenable<ISubscribableOrThenable<T>>
    >>>
  | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
    ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<T>>>
    >>>
// | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<T>
//   >>>
//   >>>
// | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<T>>
//   >>>
//   >>>
// | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<T>>>
//   >>>
//   >>>
// | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<T>
//   >>>
//   >>>
//   >>>
// | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<T>>
//   >>>
//   >>>
//   >>>
// | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
//   ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<T>>>
//   >>>
//   >>>
//   >>>

export type IMaybeSubscribableOrThenableDeep<T> =
  | T
  | ISubscribableOrThenableDeep<T>

export type ISubscriber<T, C = any> = (this: C, value: T) => any

// prettier-ignore
export type IThened<T> = T extends null | undefined
  ? T
  : T extends { then(callback: infer F): any }
    ? F extends (value: infer V, ...args: any) => any
      ? IThened<V>
      : never
    : T

// prettier-ignore
export type ISubscribed<T> =
  T extends null | undefined
    ? T
    : T extends { subscribe(callback: infer F): any }
      ? F extends (value: infer V, ...args: any) => any
        ? V
        : never
      : T

// prettier-ignore
export type ISubscribedDeep<T> =
  T extends null | undefined
    ? T
    : T extends { subscribe(callback: infer F): any }
      ? F extends (value: infer V, ...args: any) => any
        ? ISubscribedDeep<V>
        : never
      : T

// prettier-ignore
export type ISubscribedOrThened<T> =
  T extends null | undefined
    ? T
    : T extends { subscribe(callback: infer F): any }
      ? F extends (value: infer V, ...args: any) => any
        ? ISubscribedOrThened<V>
        : never
      : T extends { then(callback: infer F): any }
        ? F extends (value: infer V, ...args: any) => any
          ? V
          : never
        : T

// prettier-ignore
export type ISubscribedOrThenedDeep<T> =
  T extends null | undefined
    ? T
    : T extends { subscribe(callback: infer F): any }
      ? F extends (value: infer V, ...args: any) => any
        ? ISubscribedOrThenedDeep<V> : never
      : T extends { then(callback: infer F): any }
        ? F extends (value: infer V, ...args: any) => any
          ? ISubscribedOrThenedDeep<V>
          : never
        : T
