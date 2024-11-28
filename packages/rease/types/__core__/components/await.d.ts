import { Rease } from '../Rease';
import type { IThened } from '../types';
declare class _RAwaitThenCatch_ extends Rease {
    _is: any;
}
export declare class RAwait<T = unknown, C = undefined> extends _RAwaitThenCatch_ {
    constructor(props: {
        this?: T;
        context?: C;
        children?: (this: C, value: T) => any;
    });
    constructor(props: {
        this?: any;
        children?: any;
    });
}
export declare class RThen<T = unknown, C = undefined> extends _RAwaitThenCatch_ {
    constructor(props: {
        this?: T;
        context?: C;
        children?: (this: C, value: IThened<T>) => any;
    });
    constructor(props: {
        this?: any;
        children?: any;
    });
}
export declare class RCatch<T = unknown, C = undefined> extends _RAwaitThenCatch_ {
    constructor(props: {
        this?: T;
        context?: C;
        children?: (this: C, value: Error) => any;
    });
    constructor(props: {
        this?: any;
        children?: any;
    });
}
export {};
