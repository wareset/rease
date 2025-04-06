declare class _ISignal<G> {
    readonly prepared?: true | undefined;
    readonly captured?: true | undefined;
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
    readonly defensed?: undefined;
    get $(): G;
    get(): G;
}
export declare class ISignalDefensed<G, S = G> extends _ISignal<G> {
    readonly computed?: undefined;
    readonly defensed: true;
    get $(): G;
    get(): G;
    set(v: S, pass: any): this;
}
export declare class ISignalStandard<G, S = G> extends _ISignal<G> {
    readonly computed?: undefined;
    readonly defensed?: undefined;
    get $(): G;
    get(): G;
    set $(v: G);
    set(v: S): this;
}
export type ISignal<G, S = G> = ISignalComputed<G> | ISignalDefensed<G, S> | ISignalStandard<G, S>;
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
    compute: (observe: IObserveValues<O>, oldValue: G) => S;
    observe?: O;
    capture: (newValue: S, oldValue: G | S) => G;
    captureInitial: true;
    defense?: undefined;
}): ISignalComputed<G>;
declare function signal<G, S = G, O extends IObserve = null>(value: G, props: {
    prepare?: (iam: ISignalComputed<G>) => void | ((iam: ISignalComputed<G>) => void);
    compute: (observe: IObserveValues<O>, oldValue: G) => S;
    observe?: O;
    capture: (newValue: S, oldValue: G) => G;
    captureInitial?: false;
    defense?: undefined;
}): ISignalComputed<G>;
declare function signal<G, O extends IObserve = null>(value: G, props: {
    prepare?: (iam: ISignalComputed<G>) => void | ((iam: ISignalComputed<G>) => void);
    compute: (observe: IObserveValues<O>, oldValue: G) => G;
    observe?: O;
    defense?: undefined;
}): ISignalComputed<G>;
declare function signal<G, S = G>(value: G | S, props: {
    prepare?: (iam: ISignalStandard<G, S>) => void | ((iam: ISignalStandard<G, S>) => void);
    capture: (newValue: G | S, oldValue: G | S) => G;
    captureInitial: true;
    defense?: undefined;
}): ISignalStandard<G, S>;
declare function signal<G, S = G>(value: G, props: {
    prepare?: (iam: ISignalStandard<G, S>) => void | ((iam: ISignalStandard<G, S>) => void);
    capture: (newValue: G | S, oldValue: G) => G;
    captureInitial?: false;
    defense?: undefined;
}): ISignalStandard<G, S>;
declare function signal<G, S = G>(value: S, props: {
    prepare?: (iam: ISignalDefensed<G, S>) => void | ((iam: ISignalDefensed<G, S>) => void);
    capture: (newValue: G | S, oldValue: G | S) => G;
    captureInitial: true;
    defense: null | object | boolean | number | bigint | string | symbol;
}): ISignalDefensed<G, S>;
declare function signal<G, S = G>(value: G, props: {
    prepare?: (iam: ISignalDefensed<G, S>) => void | ((iam: ISignalDefensed<G, S>) => void);
    capture: (newValue: S, oldValue: G) => G;
    captureInitial?: false;
    defense: null | object | boolean | number | bigint | string | symbol;
}): ISignalDefensed<G, S>;
declare function signal<G>(value: G, props: {
    prepare?: (iam: ISignalDefensed<G>) => void | ((iam: ISignalDefensed<G>) => void);
    defense: null | object | boolean | number | bigint | string | symbol;
}): ISignalDefensed<G>;
declare function signal<G>(value?: G, props?: {
    prepare?: (iam: ISignalStandard<G>) => void | ((iam: ISignalStandard<G>) => void);
    defense?: undefined;
}): ISignalStandard<G>;
export { signal };
declare function computed<G, O extends IObserve = null>(observe: O, compute: (observe: IObserveValues<O>, value: G) => G, initValue: G): ISignalComputed<G>;
declare function computed<G, O extends IObserve = null>(observe: O, compute: (observe: IObserveValues<O>, value: G | undefined) => G): ISignalComputed<G>;
export { computed };
declare function effect<G = undefined, O extends IObserve = null>(observe: O, compute: <V = G | undefined>(value: V, observe: IObserveValues<O>) => G, onChange?: (value: G) => any): () => void;
export { effect };
declare function isSignal<T>(any: any): any is ISignal<T>;
declare function isSignalComputed<G>(any: any): any is ISignalComputed<G>;
declare function isSignalDefensed<G, S = G>(any: any): any is ISignalDefensed<G, S>;
declare function isSignalStandard<G, S = G>(any: any): any is ISignalStandard<G, S>;
export { isSignal, isSignalStandard, isSignalComputed, isSignalDefensed };
