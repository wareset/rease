import type { ISubscriber, IUnsubscriber, ISubscribedOrThened, ISubscribedOrThenedDeep } from '../types';
export declare function watch<T, C = undefined>(v: T, cb: ISubscriber<ISubscribedOrThened<T>, C>, thisArg?: C): IUnsubscriber;
export declare function watchDeep<T, C = undefined>(v: T, cb: ISubscriber<ISubscribedOrThenedDeep<T>, C>, thisArg?: C): IUnsubscriber;
export type ISubscribedOrThenedAll<T extends readonly unknown[] | []> = {
    -readonly [P in keyof T]: ISubscribedOrThened<T[P]>;
};
export declare const watchAll: <T extends [] | readonly unknown[], C = undefined>(a: T, cb: ISubscriber<ISubscribedOrThenedAll<T>, C>, thisArg?: C) => IUnsubscriber;
export type ISubscribedOrThenedDeepAll<T extends readonly unknown[] | []> = {
    -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]>;
};
export declare const watchDeepAll: <T extends [] | readonly unknown[], C = undefined>(a: T, cb: ISubscriber<ISubscribedOrThenedDeepAll<T>, C>, thisArg?: C) => IUnsubscriber;
export declare class ReaseWatcher<T = any, S = any> {
    private _;
    readonly deep: boolean;
    readonly all: boolean;
    constructor(value: T, mapFunc: ReaseWatcher<T, S>['_']['m'], thisArg: ReaseWatcher<T, S>['_']['t'], watchFn: ReaseWatcher<T, S>['_']['w'], isDeep: boolean, isAll: boolean);
    subscribe<C = undefined>(cb: ISubscriber<S, C>, thisArg?: C): () => void;
    toJSON(): void;
}
declare function watcher<T>(value: T): ReaseWatcher<T, ISubscribedOrThened<T>>;
declare function watcher<T, R = ISubscribedOrThened<T>, C = undefined>(value: T, mapFunc: (this: C, value: ISubscribedOrThened<T>) => R, thisArg?: C): ReaseWatcher<T, R>;
export { watcher };
declare function watcherDeep<T>(value: T): ReaseWatcher<T, ISubscribedOrThenedDeep<T>>;
declare function watcherDeep<T, R = ISubscribedOrThenedDeep<T>, C = undefined>(value: T, mapFunc: (this: C, value: ISubscribedOrThenedDeep<T>) => R, thisArg?: C): ReaseWatcher<T, R>;
export { watcherDeep };
declare function watcherAll<T extends readonly unknown[] | []>(value: T): ReaseWatcher<T, ISubscribedOrThenedAll<T>>;
declare function watcherAll<T extends readonly unknown[] | [], R = ISubscribedOrThenedAll<T>, C = undefined>(value: T, mapFunc: (this: C, value: ISubscribedOrThenedAll<T>) => R, thisArg?: C): ReaseWatcher<T, R>;
export { watcherAll };
declare function watcherDeepAll<T extends readonly unknown[] | []>(value: T): ReaseWatcher<T, ISubscribedOrThenedDeepAll<T>>;
declare function watcherDeepAll<T extends readonly unknown[] | [], R = ISubscribedOrThenedDeepAll<T>, C = undefined>(value: T, mapFunc: (this: C, value: ISubscribedOrThenedDeepAll<T>) => R, thisArg?: C): ReaseWatcher<T, R>;
export { watcherDeepAll };
