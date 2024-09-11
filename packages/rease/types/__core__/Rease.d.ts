import type { ISubscribedOrThened, ISubscribedOrThenedDeep, ISubscriber } from '.';
import { IThened } from '.';
import { noop } from '.';
import { RElement } from '.';
type IComponent<P extends {
    [key: string]: any;
} = any> = ((this: Rease, props: P) => any) | {
    new (props: P): Rease;
};
declare class JSX<P extends {
    [key: string]: any;
} = any> {
    c: IComponent<P>;
    p: P;
    constructor(ctor: any, props: any);
}
type IDblList = {
    p: IDblList;
    n: IDblList;
    c: any;
    f: (...a: any[]) => any;
};
declare class Rease {
    private readonly _name;
    readonly _: {
        c1: boolean;
        $1: number;
        c2: IDblList | null;
        $2: number;
        d1: IDblList | null;
        d2: IDblList | null;
        if: any[];
        cr: Function;
        readonly in: {
            i: number;
        }[];
        readonly oc: {
            [key: string]: IDblList;
        };
        readonly on: {
            [key: string]: IDblList;
        };
    };
    readonly inited: boolean;
    readonly destroyed: boolean;
    readonly root: Rease;
    readonly children: Readonly<Rease[]>;
    readonly parent: Rease | null;
    readonly prev: Rease | null;
    readonly next: Rease | null;
    constructor();
    init(): void;
    insert(jsx: any, idx?: number): Rease[];
    splice(start: number, remove: number, jsx: any): Rease[];
    destroy(): void;
    destroyChildren(): void;
    move(to: Rease | null, idx?: number): boolean;
    on<Detail, C = undefined>(type: string, cb: (this: C, iam: this, detail: Detail) => void, thisArg?: C, isCapture?: boolean | null): () => void;
    emit<Detail>(type: string, detail?: Detail, isCapture?: boolean | null): void;
    emitDeep<Detail>(type: string, detail?: Detail): void;
    notifyParents<Detail>(type: string, detail?: Detail): void;
    notifyChildren<Detail>(type: string, detail?: Detail): void;
    onMove<C = undefined>(hook: (this: C, iam: this) => any, thisArg?: C): () => void;
    onReady<C = undefined>(hook: (this: C, iam: this) => any, thisArg?: C): () => void;
    onBeforeDestroy<C = undefined>(hook: (this: C, iam: this) => any, thisArg?: C): () => void;
    onDestroy<C = undefined>(hook: (this: C, iam: this) => any, thisArg?: C): () => void;
    await<T, C = undefined>(thing: T, onfulfilled?: (this: C, value: IThened<T>) => any, thisArg?: C): typeof noop;
    awaitAll<T extends readonly unknown[] | [], C = undefined>(things: T, onfulfilled: (this: C, a: {
        -readonly [P in keyof T]: IThened<T[P]>;
    }) => any, thisArg?: C): typeof noop;
    watch<T, C = undefined>($val$: T, cb?: ISubscriber<ISubscribedOrThened<T>, C>, thisArg?: C): typeof noop;
    watchDeep<T, C = undefined>($val$: T, cb?: ISubscriber<ISubscribedOrThenedDeep<T>, C>, thisArg?: C): typeof noop;
    watchAll<T extends readonly unknown[] | [], C = undefined>($vals$: T, cb?: ISubscriber<{
        -readonly [P in keyof T]: ISubscribedOrThened<T[P]>;
    }, C>, thisArg?: C): typeof noop;
    watchDeepAll<T extends readonly unknown[] | [], C = undefined>($vals$: T, cb?: ISubscriber<{
        -readonly [P in keyof T]: ISubscribedOrThenedDeep<T[P]>;
    }, C>, thisArg?: C): typeof noop;
    findParent<P extends Function>(parentCtor: FindsArg<P>): FindsRes<P>;
    findFirstChild<C extends Function>(childCtor: FindsArg<C>, skipCtor?: FindsArg<Function>): FindsRes<C>;
    findLastChild<C extends Function>(childCtor: FindsArg<C>, skipCtor?: FindsArg<Function>): FindsRes<C>;
    findPrevSibling<S extends Function>(prevCtor: FindsArg<S>, skipCtor?: FindsArg<Function>): FindsRes<S>;
    findNextSibling<S extends Function>(nextCtor: FindsArg<S>, skipCtor?: FindsArg<Function>): FindsRes<S>;
    findParentOrPrev<P extends Function, S extends Function>(parentCtor: FindsArg<P>, prevCtor: FindsArg<S>): {
        prev: FindsRes<S>;
        parent?: undefined;
    } | {
        parent: FindsRes<P>;
        prev?: undefined;
    } | {
        prev?: undefined;
        parent?: undefined;
    };
    findParentOrNext<P extends Function, S extends Function>(parentCtor: FindsArg<P>, nextCtor: FindsArg<S>): {
        next: FindsRes<S>;
        parent?: undefined;
    } | {
        parent: FindsRes<P>;
        next?: undefined;
    } | {
        next?: undefined;
        parent?: undefined;
    };
}
type FindsArg<T> = T | T[];
type FindsRes<T> = T extends {
    new (...a: any[]): infer R;
} ? R extends Rease ? R : never : Rease;
declare function createElement<P extends {
    [key: string]: any;
}>(component: string | IComponent<P>, props: P | null, ...children: any[]): JSX;
export { Rease, createElement };
export declare function render(node: HTMLElement | SVGElement | null, jsx: any): RElement;
