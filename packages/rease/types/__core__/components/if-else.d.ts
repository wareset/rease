import { Rease } from '../Rease';
import type { ISubscribedOrThenedDeep } from '../types';
declare class _RIfElseIf_ extends Rease {
    _is: any[];
    move(): never;
}
export declare class RIf<T = unknown, C = RIf<T, any>> extends _RIfElseIf_ {
    constructor(props: {
        this: T;
        context?: C;
        callback: (this: C, value: ISubscribedOrThenedDeep<T>) => any;
    });
    constructor(props: {
        this: any;
        children?: any;
    });
}
export declare class RElseIf<T = unknown, C = RElseIf<T, any>> extends _RIfElseIf_ {
    constructor(props: {
        this: T;
        context?: C;
        callback: (this: C, value: ISubscribedOrThenedDeep<T>) => any;
    });
    constructor(props: {
        this: any;
        children?: any;
    });
}
export declare class RElse<C = RElse<any>> extends _RIfElseIf_ {
    constructor(props: {
        context?: C;
        callback: (this: C, value: true) => any;
    });
    constructor(props: {
        children?: any;
    });
}
export {};
