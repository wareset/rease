import { Rease } from '../Rease';
import { noop } from '../utils/noop';
import type { ISubscribedOrThenedDeep } from '../types';
export declare class RSwitch extends Rease {
    _is: any;
    constructor(props: {
        is: any;
        children?: any;
    });
}
export declare class RCase<T = unknown, C = undefined> extends Rease {
    _is: any;
    _ctx: {
        r: RCase;
        t: any;
        b: boolean;
        c: any;
        i?: any;
        u: typeof noop;
    };
    _switch?: RSwitch | undefined;
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
