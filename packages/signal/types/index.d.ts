declare function batch<C>(func: (this: C) => any, thisArg?: C): void;
declare function batch<C, F extends (this: C, ...a: any[]) => any>(func: F, thisArg: C, args: [...Parameters<F>]): void;
export { batch };
declare function batchify<T extends (...a: any[]) => any>(fn: T): T;
export { batchify };
export declare class ISignal<T> {
    readonly _value: T;
    get $(): T;
    set $(v: T);
    get(): T;
    set(v: T): void;
    subscribe<C>(callback: (this: C, value: T) => void, thisArg?: C): () => void;
    toString(...a: any): T extends {
        toString(...a: any): infer I;
    } ? I : string;
    valueOf(...a: any): T extends {
        valueOf(...a: any): infer I;
    } ? I : T;
    toJSON(...a: any): T extends {
        toJSON(...a: any): infer I;
    } ? I : T;
}
export declare class ISignalComputed<T> {
    readonly _value: T;
    get $(): T;
    get(): T;
    subscribe<C>(callback: (this: C, value: T) => void, thisArg?: C): () => void;
    toString(...a: any): T extends {
        toString(...a: any): infer I;
    } ? I : string;
    valueOf(...a: any): T extends {
        valueOf(...a: any): infer I;
    } ? I : T;
    toJSON(...a: any): T extends {
        toJSON(...a: any): infer I;
    } ? I : T;
}
type IObserve = readonly unknown[] | [] | null;
type ISubscribed<T> = T extends null | undefined ? T : T extends object & {
    subscribe(callback: infer F): any;
} ? F extends (value: infer V, ...args: any) => any ? V : never : T;
type IObserveValues<O extends IObserve> = O extends null | undefined ? O : {
    -readonly [P in keyof O]: ISubscribed<O[P]>;
};
declare function signal<T, O extends IObserve = null>(value: T, props: {
    prepare?: (iam: ISignalComputed<T>) => void | ((iam: ISignalComputed<T>) => void);
    capture?: (newValue: T, oldValue: T) => T;
    compute: (value: T, observe: IObserveValues<O>) => T;
    observe?: O;
}): ISignalComputed<T>;
declare function signal<T>(value: T, props?: {
    prepare?: (iam: ISignal<T>) => void | ((iam: ISignal<T>) => void);
    capture?: (newValue: T, oldValue: T) => T;
}): ISignal<T>;
export { signal };
declare function computed<T, O extends IObserve = null, V = T | undefined>(observe: O, compute: (_: V, observe: IObserveValues<O>) => T): ISignalComputed<T>;
export { computed };
declare function effect<T, O extends IObserve = null, V = T | undefined>(observe: O, compute: (_: V, observe: IObserveValues<O>) => T, onChange?: (value: T) => any): () => {};
export { effect };
declare function isSignal<T = any>(thing: any): thing is ISignal<T> | ISignalComputed<T>;
declare function isSignalStrict<T = any>(thing: any): thing is ISignal<T>;
declare function isSignalComputed<T = any>(thing: any): thing is ISignalComputed<T>;
export { isSignal, isSignalStrict, isSignalComputed };
