export declare class ISignal<G, S = G> {
    readonly _value: G;
    get $(): G;
    set $(v: S);
    get(): G;
    set(v: S): this;
    subscribe<C>(callback: (this: C, value: G) => void, thisArg?: C): () => void;
    toString(...a: any): G extends {
        toString(...a: any): infer I;
    } ? I : string;
    valueOf(...a: any): G extends {
        valueOf(...a: any): infer I;
    } ? I : G;
    toJSON(...a: any): G extends {
        toJSON(...a: any): infer I;
    } ? I : G;
}
export declare class ISignalComputed<G> {
    readonly _value: G;
    get $(): G;
    get(): G;
    subscribe<C>(callback: (this: C, value: G) => void, thisArg?: C): () => void;
    toString(...a: any): G extends {
        toString(...a: any): infer I;
    } ? I : string;
    valueOf(...a: any): G extends {
        valueOf(...a: any): infer I;
    } ? I : G;
    toJSON(...a: any): G extends {
        toJSON(...a: any): infer I;
    } ? I : G;
}
type IObserve = readonly unknown[] | [] | null;
type _ISubscribed<T> = T extends null | undefined ? T : T extends {
    subscribe(callback: infer F): any;
} ? F extends (value: infer V, ...args: any) => any ? V : never : T;
type IObserveValues<O extends IObserve> = O extends null | undefined ? O : {
    -readonly [P in keyof O]: _ISubscribed<O[P]>;
};
declare function batch<C, F extends (this: C) => any>(func: F, thisArg?: C): void;
declare function batch<C, F extends (this: C, ...a: any[]) => any>(func: F, thisArg: C, args: [...Parameters<F>]): void;
export { batch };
declare function batchify<T extends (...a: any[]) => any>(fn: T): T;
export { batchify };
declare function signal<G, S = G, O extends IObserve = null>(value: S, props: {
    prepare?: (iam: ISignalComputed<G>) => void | ((iam: ISignalComputed<G>) => void);
    compute: <V = G>(value: V, observe: IObserveValues<O>) => S;
    observe?: O;
    capture: (newValue: S, oldValue: G) => G;
}): ISignalComputed<G>;
declare function signal<G, O extends IObserve = null>(value: G, props: {
    prepare?: (iam: ISignalComputed<G>) => void | ((iam: ISignalComputed<G>) => void);
    compute: <V = G>(value: V, observe: IObserveValues<O>) => G;
    observe?: O;
}): ISignalComputed<G>;
declare function signal<G, S = G>(value: S, props: {
    prepare?: (iam: ISignal<G, S>) => void | ((iam: ISignal<G, S>) => void);
    capture: (newValue: S, oldValue: G) => G;
}): ISignal<G, S>;
declare function signal<G>(value?: G, props?: {
    prepare?: (iam: ISignal<G>) => void | ((iam: ISignal<G>) => void);
}): ISignal<G>;
export { signal };
declare function computed<G, O extends IObserve = null>(observe: O, compute: <V = G | undefined>(value: V, observe: IObserveValues<O>) => G): ISignalComputed<G>;
export { computed };
declare function effect<G = undefined, O extends IObserve = null>(observe: O, compute: <V = G | undefined>(value: V, observe: IObserveValues<O>) => G, onChange?: (value: G) => any): () => void;
export { effect };
declare function isSignal<T = any>(thing: any): thing is ISignal<T> | ISignalComputed<T>;
declare function isSignalStrict<T = any>(thing: any): thing is ISignal<T>;
declare function isSignalComputed<T = any>(thing: any): thing is ISignalComputed<T>;
export { isSignal, isSignalStrict, isSignalComputed };
