import type { ISubscribableOrThenableDeep } from '../types';
import { Rease } from '../Rease';
export declare class RMove extends Rease {
    constructor({ to, index, children, }: {
        to: ISubscribableOrThenableDeep<Rease>;
        index?: ISubscribableOrThenableDeep<number>;
        children?: any;
    });
}
