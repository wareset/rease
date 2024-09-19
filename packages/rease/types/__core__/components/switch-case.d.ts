import { Rease } from '../Rease';
import { noop } from '../utils/noop';
import type { ISubscriber, ISubscribedOrThenedDeep } from '../types';
export declare class RSwitch extends Rease {
    _is: any;
    constructor({ is, children }: {
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
    constructor({}: {
        is: T;
        context?: C;
        children?: ISubscriber<ISubscribedOrThenedDeep<T>, C>;
    });
}
