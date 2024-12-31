import { JSX_SVG } from './generated/jsx_svg';
import { Tags as JSX_HTML } from './generated/html_tags';
import { GlobalAttributes } from './generated/html_global_attributes';
import { Properties as CSSProperties } from 'csstype';
import type { RElement } from 'rease';
type StyleBasic = (CSSProperties & {
    [K: `--${string}`]: string | number;
}) | string | StyleBasic[];
type StyleExtra = {
    [K in keyof CSSProperties & string as `style-${K}`]: CSSProperties[K];
} & {
    [K: `style---${string}`]: string | number;
};
type ClassBasic = {
    [k: string]: any;
} | string | ClassBasic[];
type ClassExtra = {
    [k: `${'class-'}${string}`]: any;
};
type Events = {
    [K in keyof GlobalEventHandlersEventMap & string as `on-${K}${'' | `-${string}`}`]: (this: RElement, evt: GlobalEventHandlersEventMap[K]) => void;
};
type IUnsubscriber = () => any;
interface ISubscribable<T> {
    subscribe(subscriber: (value: T, ...args: any) => any): IUnsubscriber | {
        unsubscribe: IUnsubscriber;
    };
}
interface IThenable<T> {
    then(resolver: (value: T, ...args: any) => any): any;
}
type ISubscribableOrThenable<T> = ISubscribable<T> | IThenable<T>;
type ISubscribableOrThenableDeep<T> = ISubscribableOrThenable<T> | ISubscribableOrThenable<ISubscribableOrThenable<T>> | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<T>>> | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<T>>>>;
type ToMaybeSubscribableOrThenable<T> = {
    [K in keyof T]: T[K] | ISubscribableOrThenableDeep<T[K]>;
};
type IntristicsFactory<T, ElementTagNameMap, Element> = {
    [K in keyof T]: Partial<ToMaybeSubscribableOrThenable<Omit<T[K] & GlobalAttributes & Omit<K extends keyof ElementTagNameMap ? ElementTagNameMap[K] : Element, 'children' | keyof T[K] | keyof GlobalAttributes>, 'style' | 'class' | `on${string}`> & {
        style: StyleBasic;
        class: ClassBasic;
    } & StyleExtra & ClassExtra & Events>>;
};
type I_SVG = IntristicsFactory<JSX_SVG, SVGElementTagNameMap, SVGElement>;
type I_HTML = IntristicsFactory<JSX_HTML, HTMLElementTagNameMap, HTMLElement>;
type Intristics = Omit<I_HTML, keyof I_SVG> & {
    [K in keyof I_SVG]: K extends keyof I_HTML ? I_HTML[K] | I_SVG[K] : I_SVG[K];
};
export type { Intristics as IntrinsicElements };
declare global {
    namespace JSX {
        type ElementType = any;
        interface ElementChildrenAttribute {
            children: {};
        }
        interface IntrinsicAttributes {
        }
        interface IntrinsicElements extends Intristics {
        }
    }
}
