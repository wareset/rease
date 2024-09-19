import { Rease } from '../Rease';
import type { ISubscriber, ISubscribedOrThenedDeep } from '../types';
declare class _RIfElseIf_ extends Rease {
    _is: any[];
    move(): never;
}
export declare class RIf<T = unknown, C = undefined> extends _RIfElseIf_ {
    constructor({}: {
        is: T;
        context?: C;
        children?: ISubscriber<ISubscribedOrThenedDeep<T>, C>;
    });
}
export declare class RElseIf<T = unknown, C = undefined> extends _RIfElseIf_ {
    constructor({}: {
        is: T;
        context?: C;
        children?: ISubscriber<ISubscribedOrThenedDeep<T>, C>;
    });
}
export declare class RElse<C = undefined> extends _RIfElseIf_ {
    constructor({}: {
        context?: C;
        children?: (this: C, value: true) => any;
    });
}
export {};
