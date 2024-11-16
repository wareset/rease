import { Rease } from '../Rease';
import type { ISubscribedOrThenedDeep } from '../types';
declare class _RIfElseIf_ extends Rease {
    _is: any[];
    move(): never;
}
export declare class RIf<T = unknown, C = undefined> extends _RIfElseIf_ {
    constructor(props: {
        is: T;
        context?: C;
        children?: (this: C, value: ISubscribedOrThenedDeep<T>) => any;
    });
    constructor(props: {
        is: any;
        children?: any;
    });
}
export declare class RElseIf<T = unknown, C = undefined> extends _RIfElseIf_ {
    constructor(props: {
        is: T;
        context?: C;
        children?: (this: C, value: ISubscribedOrThenedDeep<T>) => any;
    });
    constructor(props: {
        is: any;
        children?: any;
    });
}
export declare class RElse<C = undefined> extends _RIfElseIf_ {
    constructor(props: {
        context?: C;
        children?: (this: C, value: true) => any;
    });
    constructor(props: {
        children?: any;
    });
}
export {};
