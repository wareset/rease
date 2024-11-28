import { Rease } from '../Rease';
export declare class RForIn extends Rease {
    constructor({ this: is, watch, children, }: {
        this: any;
        watch?: any;
        children: (v: any, k: string, a: any) => any;
    });
}
export declare class RForOf extends Rease {
    _is: any;
    constructor({ this: is, watch, children, }: {
        this: any;
        watch?: any;
        children: (v: any, k: string | number, a: any) => any;
    });
}
