import { Rease } from '../Rease';
import type { IThened } from '../types';
declare class _RAwaitThenCatch_ extends Rease {
    _is: any;
}
export declare class RAwait<T = unknown, C = RAwait<T, any>> extends _RAwaitThenCatch_ {
    constructor(props: {
        this?: T;
        context?: C;
        callback: (this: C, value: T) => any;
    });
    constructor(props: {
        this?: any;
        children?: any;
    });
}
export declare class RThen<T = unknown, C = RThen<T, any>> extends _RAwaitThenCatch_ {
    constructor(props: {
        this?: T;
        context?: C;
        callback: (this: C, value: IThened<T>) => any;
    });
    constructor(props: {
        this?: any;
        children?: any;
    });
}
export declare class RCatch<T = unknown, C = RCatch<T, any>> extends _RAwaitThenCatch_ {
    constructor(props: {
        this?: T;
        context?: C;
        callback: (this: C, value: Error) => any;
    });
    constructor(props: {
        this?: any;
        children?: any;
    });
}
export {};
