declare class _ISignal<G> {
    readonly prepared?: true;
    readonly captured?: true;
    private readonly _value;
    subscribe<C>(callback: (this: C, value: G) => void, thisArg?: C): () => void;
    toString(...a: G extends {
        toString(...a: any): any;
    } ? Parameters<G['toString']> : any): G extends {
        toString(...a: any): infer I;
    } ? I : string;
    valueOf(...a: G extends {
        valueOf(...a: any): any;
    } ? Parameters<G['valueOf']> : any): G extends {
        valueOf(...a: any): infer I;
    } ? I : G;
    toJSON(...a: G extends {
        toJSON(...a: any): any;
    } ? Parameters<G['toJSON']> : any): G extends {
        toJSON(...a: any): infer I;
    } ? I : G;
}
export declare class ISignalComputed<G> extends _ISignal<G> {
    readonly computed: true;
    get $(): G;
    get(): G;
}
export declare class ISignalManually<G, S = G> extends _ISignal<G> {
    readonly computed?: undefined;
    get $(): G;
    get(): G;
    set $(v: G);
    set(v: S): this;
}
export type ISignal<G, S = G> = ISignalComputed<G> | ISignalManually<G, S>;
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
    compute: <V = G>(observe: IObserveValues<O>, value: V) => S;
    observe?: O;
    capture: (newValue: S, oldValue: G) => G;
}): ISignalComputed<G>;
declare function signal<G, O extends IObserve = null>(value: G, props: {
    prepare?: (iam: ISignalComputed<G>) => void | ((iam: ISignalComputed<G>) => void);
    compute: <V = G>(observe: IObserveValues<O>, value: V) => G;
    observe?: O;
}): ISignalComputed<G>;
declare function signal<G, S = G>(value: S, props: {
    prepare?: (iam: ISignalManually<G, S>) => void | ((iam: ISignalManually<G, S>) => void);
    capture: (newValue: S, oldValue: G) => G;
}): ISignalManually<G, S>;
declare function signal<G>(value?: G, props?: {
    prepare?: (iam: ISignalManually<G>) => void | ((iam: ISignalManually<G>) => void);
}): ISignalManually<G>;
export { signal };
declare function computed<G, O extends IObserve = null>(observe: O, compute: <V = G | undefined>(observe: IObserveValues<O>, value: V) => G, initValue?: G): ISignalComputed<G>;
export { computed };
declare function effect<G = undefined, O extends IObserve = null>(observe: O, compute: <V = G | undefined>(value: V, observe: IObserveValues<O>) => G, onChange?: (value: G) => any): () => void;
export { effect };
declare function isSignal<T = any>(thing: any): thing is ISignal<T>;
declare function isSignalManually<T = any>(thing: any): thing is ISignalManually<T>;
declare function isSignalComputed<T = any>(thing: any): thing is ISignalComputed<T>;
export { isSignal, isSignalManually, isSignalComputed };
