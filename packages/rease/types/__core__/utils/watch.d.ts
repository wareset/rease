import type { ISubscriber, IUnsubscriber } from '..';
import type { ISubscribedOrThened, ISubscribedOrThenedDeep } from '..';
export declare function watch<T, C = undefined>(v: T, cb: ISubscriber<ISubscribedOrThened<T>, C>, thisArg?: C): IUnsubscriber;
export declare function watchDeep<T, C = undefined>(v: T, cb: ISubscriber<ISubscribedOrThenedDeep<T>, C>, thisArg?: C): IUnsubscriber;
export declare const watchAll: <T extends [] | readonly unknown[], C = undefined>(a: T, cb: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThened<T[P]>; }, C>, ctx?: C) => IUnsubscriber;
export declare const watchDeepAll: <T extends [] | readonly unknown[], C = undefined>(a: T, cb: ISubscriber<{ -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]>; }, C>, ctx?: C) => IUnsubscriber;
