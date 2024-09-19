import { Rease } from '../Rease';
export declare class RForIn extends Rease {
    constructor({ is, watch, children, }: {
        is: any;
        watch?: any;
        children: (v: any, k: string, a: any) => any;
    });
}
export declare class RForOf extends Rease {
    _is: any;
    constructor({ is, watch, children, }: {
        is: any;
        watch?: any;
        children: (v: any, k: string | number, a: any) => any;
    });
}
