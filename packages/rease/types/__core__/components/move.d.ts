import type { ISubscribableOrThenableDeep } from '../types';
import { Rease } from '../Rease';
export declare class RMove extends Rease {
    constructor(props: {
        to: ISubscribableOrThenableDeep<Rease>;
        index?: ISubscribableOrThenableDeep<number>;
        children?: any;
    });
}
