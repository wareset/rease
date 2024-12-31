import { Rease } from '../Rease';
export declare class RForIn extends Rease {
    constructor({ this: is, watch, callback, }: {
        this: any;
        watch?: any;
        callback: (v: any, k: string, a: any) => any;
    });
}
export declare class RForOf extends Rease {
    _is: any;
    constructor({ this: is, watch, callback, }: {
        this: any;
        watch?: any;
        callback: (v: any, k: string | number, a: any) => any;
    });
}
