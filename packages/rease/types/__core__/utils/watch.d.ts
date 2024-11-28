import type { ISubscriber, IUnsubscriber, ISubscribedOrThened, ISubscribedOrThenedDeep } from '../types';
export declare function watch<T, C = undefined>(v: T, cb: ISubscriber<ISubscribedOrThened<T>, C>, thisArg?: C): IUnsubscriber;
export declare function watchDeep<T, C = undefined>(v: T, cb: ISubscriber<ISubscribedOrThenedDeep<T>, C>, thisArg?: C): IUnsubscriber;
export declare const watchAll: <T extends [] | readonly unknown[], C = undefined>(a: T, cb: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThened<T[P]>; }, C>, thisArg?: C) => IUnsubscriber;
export declare const watchDeepAll: <T extends [] | readonly unknown[], C = undefined>(a: T, cb: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]>; }, C>, thisArg?: C) => IUnsubscriber;
declare class ReaseWatcher<T, S> {
    private _;
    readonly deep: boolean;
    readonly all: boolean;
    constructor(v: T, w: ReaseWatcher<T, S>['_']['w'], deep: boolean, all: boolean);
    subscribe<C = undefined>(cb: ISubscriber<S, C>, thisArg?: C): () => void;
    toJSON(): void;
}
export declare function watcher<T>(v: T): ReaseWatcher<T, ISubscribedOrThened<T>>;
export declare function watcherDeep<T>(v: T): ReaseWatcher<T, ISubscribedOrThenedDeep<T>>;
export declare function watcherAll<T extends readonly unknown[] | []>(v: T): ReaseWatcher<T, { -readonly [P in keyof T]: ISubscribedOrThened<T[P]>; }>;
export declare function watcherDeepAll<T extends readonly unknown[] | []>(v: T): ReaseWatcher<T, { -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]>; }>;
export {};
