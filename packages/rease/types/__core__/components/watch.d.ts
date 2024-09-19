import { Rease } from '../Rease';
import type { ISubscriber, ISubscribedOrThenedDeep } from '../types';
export declare class RWatch<T = unknown, C = undefined> extends Rease {
    constructor({}: {
        is: T;
        context?: C;
        children?: T extends readonly unknown[] | [] ? ISubscriber<{
            -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]>;
        }, C> : ISubscriber<ISubscribedOrThenedDeep<T>, C>;
    });
}
