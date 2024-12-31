import { Rease } from '../Rease';
import type { ISubscribedOrThenedDeep } from '../types';
export declare class RWatch<T = unknown, C = RWatch<T, any>> extends Rease {
    constructor(props: {
        this: T;
        context?: C;
        callback: T extends readonly unknown[] | [] ? (this: C, value: {
            -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]>;
        }) => any : (this: C, value: ISubscribedOrThenedDeep<T>) => any;
    });
    constructor(props: {
        this: any;
        children?: any;
    });
}
