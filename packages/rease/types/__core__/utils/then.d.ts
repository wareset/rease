import type { IThenable, IThened } from '../types';
import { noop } from './noop';
export declare function then<T, C = undefined>(v: IThenable<T>, onfulfilled: (this: C, value: T) => any, thisArg?: C): () => void;
export declare function thenSafe<T, C = undefined>(v: T, onfulfilled: (this: C, value: IThened<T>) => any, thisArg?: C): typeof noop;
export declare function thenSafeAll<T extends readonly unknown[] | [], C = undefined>(a: T, cb: (this: C, a: {
    -readonly [P in keyof T]: IThened<T[P]>;
}) => any, thisArg?: C): typeof noop;
export declare function thenable<T, C = unknown>(executor: (this: C, resolve: (value: T | PromiseLike<T>) => void) => any, thisArg?: C): {
    (): void;
    then: <R = T>(onfulfilled: (this: C, value: T) => R | PromiseLike<R>) => {
        (): void;
        then: <R_1 = R>(onfulfilled: (this: C, value: R) => R_1 | PromiseLike<R_1>) => {
            (): void;
            then: <R_2 = R_1>(onfulfilled: (this: C, value: R_1) => R_2 | PromiseLike<R_2>) => {
                (): void;
                then: <R_3 = R_2>(onfulfilled: (this: C, value: R_2) => R_3 | PromiseLike<R_3>) => {
                    (): void;
                    then: <R_4 = R_3>(onfulfilled: (this: C, value: R_3) => R_4 | PromiseLike<R_4>) => {
                        (): void;
                        then: <R_5 = R_4>(onfulfilled: (this: C, value: R_4) => R_5 | PromiseLike<R_5>) => {
                            (): void;
                            then: <R_6 = R_5>(onfulfilled: (this: C, value: R_5) => R_6 | PromiseLike<R_6>) => {
                                (): void;
                                then: <R_7 = R_6>(onfulfilled: (this: C, value: R_6) => R_7 | PromiseLike<R_7>) => {
                                    (): void;
                                    then: <R_8 = R_7>(onfulfilled: (this: C, value: R_7) => R_8 | PromiseLike<R_8>) => {
                                        (): void;
                                        then: <R_9 = R_8>(onfulfilled: (this: C, value: R_8) => R_9 | PromiseLike<R_9>) => {
                                            (): void;
                                            then: <R_10 = R_9>(onfulfilled: (this: C, value: R_9) => R_10 | PromiseLike<R_10>) => any;
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const timeout: <T, C = undefined>(ms?: number, cb?: () => T, thisArg?: C) => {
    (): void;
    then: <R = T>(onfulfilled: (this: C, value: T) => R | PromiseLike<R>) => {
        (): void;
        then: <R_1 = R>(onfulfilled: (this: C, value: R) => R_1 | PromiseLike<R_1>) => {
            (): void;
            then: <R_2 = R_1>(onfulfilled: (this: C, value: R_1) => R_2 | PromiseLike<R_2>) => {
                (): void;
                then: <R_3 = R_2>(onfulfilled: (this: C, value: R_2) => R_3 | PromiseLike<R_3>) => {
                    (): void;
                    then: <R_4 = R_3>(onfulfilled: (this: C, value: R_3) => R_4 | PromiseLike<R_4>) => {
                        (): void;
                        then: <R_5 = R_4>(onfulfilled: (this: C, value: R_4) => R_5 | PromiseLike<R_5>) => {
                            (): void;
                            then: <R_6 = R_5>(onfulfilled: (this: C, value: R_5) => R_6 | PromiseLike<R_6>) => {
                                (): void;
                                then: <R_7 = R_6>(onfulfilled: (this: C, value: R_6) => R_7 | PromiseLike<R_7>) => {
                                    (): void;
                                    then: <R_8 = R_7>(onfulfilled: (this: C, value: R_7) => R_8 | PromiseLike<R_8>) => {
                                        (): void;
                                        then: <R_9 = R_8>(onfulfilled: (this: C, value: R_8) => R_9 | PromiseLike<R_9>) => {
                                            (): void;
                                            then: <R_10 = R_9>(onfulfilled: (this: C, value: R_9) => R_10 | PromiseLike<R_10>) => {
                                                (): void;
                                                then: any;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
export declare const interval: <T, C = undefined>(ms?: number, cb?: () => T, thisArg?: C) => {
    (): void;
    then: <R = T>(onfulfilled: (this: C, value: T) => R | PromiseLike<R>) => {
        (): void;
        then: <R_1 = R>(onfulfilled: (this: C, value: R) => R_1 | PromiseLike<R_1>) => {
            (): void;
            then: <R_2 = R_1>(onfulfilled: (this: C, value: R_1) => R_2 | PromiseLike<R_2>) => {
                (): void;
                then: <R_3 = R_2>(onfulfilled: (this: C, value: R_2) => R_3 | PromiseLike<R_3>) => {
                    (): void;
                    then: <R_4 = R_3>(onfulfilled: (this: C, value: R_3) => R_4 | PromiseLike<R_4>) => {
                        (): void;
                        then: <R_5 = R_4>(onfulfilled: (this: C, value: R_4) => R_5 | PromiseLike<R_5>) => {
                            (): void;
                            then: <R_6 = R_5>(onfulfilled: (this: C, value: R_5) => R_6 | PromiseLike<R_6>) => {
                                (): void;
                                then: <R_7 = R_6>(onfulfilled: (this: C, value: R_6) => R_7 | PromiseLike<R_7>) => {
                                    (): void;
                                    then: <R_8 = R_7>(onfulfilled: (this: C, value: R_7) => R_8 | PromiseLike<R_8>) => {
                                        (): void;
                                        then: <R_9 = R_8>(onfulfilled: (this: C, value: R_8) => R_9 | PromiseLike<R_9>) => {
                                            (): void;
                                            then: <R_10 = R_9>(onfulfilled: (this: C, value: R_9) => R_10 | PromiseLike<R_10>) => {
                                                (): void;
                                                then: any;
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
    };
};
