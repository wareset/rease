import { Rease } from '../Rease';
import { noop } from '../utils/noop';
import type { ISubscribedOrThenedDeep } from '../types';
export declare class RSwitch extends Rease {
    _is: any;
    constructor(props: {
        this: any;
        children?: any;
    });
}
export declare class RCase<T = unknown, C = RCase<T, any>> extends Rease {
    _is: any;
    _ctx: {
        r: RCase;
        t: any;
        f: any;
        b: boolean;
        c: any;
        i?: any;
        u: typeof noop;
    };
    _switch?: RSwitch | null;
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
