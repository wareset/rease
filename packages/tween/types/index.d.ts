export * from './_raf';
export * from './_easing';
import { easeLinear } from './_easing';
type IDblList = {
    p: IDblList;
    n: IDblList;
    c: any;
    f: (...a: any[]) => any;
};
export declare const TWEEN_DEFAULTS: {
    ticker(t: number): void;
    paused: boolean;
    delay: number;
    duration: number;
    easing: typeof easeLinear;
};
export type ITweenValue = (readonly unknown[] | []) | {
    [key: string]: ITweenValue;
} | (object | null | undefined | boolean | number | bigint | string | symbol | ((...a: any[]) => any));
export type ITweenOptions = {
    delay?: number;
    easing?: (n: number) => number;
    duration?: number;
};
type DeepPartial<T> = T extends object ? {
    [P in keyof T]?: DeepPartial<T[P]>;
} : T;
export type ITweenTask<T extends ITweenValue = any> = {
    newValue: DeepPartial<T>;
    executor: null | ((progress: number, easing: number) => any);
    passTime: number;
    lastTime: number;
    progress: number;
    started: boolean;
    skipped: boolean;
} & Required<ITweenOptions>;
export declare class ReaseTween<T extends ITweenValue> {
    readonly _: {
        tasks: [DeepPartial<T>, ITweenOptions | undefined][];
        op?: IDblList;
        or?: IDblList;
        os?: IDblList;
        ou?: IDblList;
        of?: IDblList;
    } & Required<ITweenOptions>;
    value: T;
    task: null | ITweenTask<T>;
    paused: boolean;
    constructor(value: T, options?: ITweenOptions);
    to(newValue: DeepPartial<T>, options?: ITweenOptions): this;
    skip(): this;
    clear(): this;
    purge(): this;
    pause(): this;
    resume(): this;
    onPause<C = undefined>(cb: (this: C, value: T, self: this) => any, thisArg?: C): () => void;
    onResume<C = undefined>(cb: (this: C, value: T, self: this) => any, thisArg?: C): () => void;
    onStart<C = undefined>(cb: (this: C, value: T, self: this & {
        task: ITweenTask<T>;
    }) => any, thisArg?: C): () => void;
    onUpdate<C = undefined>(cb: (this: C, value: T, self: this & {
        task: ITweenTask<T>;
    }) => any, thisArg?: C): () => void;
    onFinish<C = undefined>(cb: (this: C, value: T, self: this & {
        task: ITweenTask<T>;
    }) => any, thisArg?: C): () => void;
}
export declare function tween<T extends ITweenValue>(value: T, options?: ITweenOptions): ReaseTween<T>;
