import { Rease } from '../Rease';
import type { ISubscribedOrThenedDeep } from '../types';
export declare class RWatch<T = unknown, C = undefined> extends Rease {
    constructor({}: {
        is: T;
        context?: C;
        children?: T extends readonly unknown[] | [] ? (this: C, value: {
            -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]>;
        }) => any : (this: C, value: ISubscribedOrThenedDeep<T>) => any;
    });
    constructor({}: {
        is: any;
        children?: any;
    });
}
