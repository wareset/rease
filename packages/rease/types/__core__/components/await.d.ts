import { Rease } from '../Rease';
import type { ISubscriber, IThened } from '../types';
export declare class RAwait<T = unknown, C = undefined> extends Rease {
    constructor({}: {
        is: T;
        context?: C;
        children?: ISubscriber<T, C>;
    });
    constructor({}: {
        is: any;
        children?: any;
    });
}
export declare class RThen<T = unknown, C = undefined> extends Rease {
    constructor({}: {
        is: T;
        context?: C;
        children?: ISubscriber<IThened<T>, C>;
    });
    constructor({}: {
        is: any;
        children?: any;
    });
}
export declare class RCatch<T = unknown, C = undefined> extends Rease {
    constructor({}: {
        is: T;
        context?: C;
        children?: ISubscriber<Error, C>;
    });
    constructor({}: {
        is: any;
        children?: any;
    });
}
