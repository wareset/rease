import { IThenable, ISubscribable } from '..';
export declare function isString(v: any): v is string;
export declare function isFunction(v: any): v is Function;
export declare function isThenable(v: any): v is IThenable<any>;
export declare function isCatchable(v: any): v is IThenable<any>;
export declare function isSubscribable(v: any): v is ISubscribable<any>;
