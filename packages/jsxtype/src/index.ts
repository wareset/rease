import { JSX_SVG } from './generated/jsx_svg'
import { Tags as JSX_HTML } from './generated/html_tags'
import { GlobalAttributes } from './generated/html_global_attributes'

import { Properties as CSSProperties } from 'csstype'

import type { RElement, Rease } from 'rease'

type StyleBasic =
  | (CSSProperties & {
      [K: `--${string}`]: string | number
    })
  | string
  | StyleBasic[]

type StyleExtra = {
  [K in keyof CSSProperties & string as `style-${K}`]: CSSProperties[K]
} & { [K: `style---${string}`]: string | number }

type ClassBasic = { [k: string]: any } | string | ClassBasic[]
type ClassExtra = { [k: `${'class-'}${string}`]: any }

type Events = {
  [K in keyof GlobalEventHandlersEventMap & string as `on-${K}${'' | `-${string}`}`]: (
    this: RElement,
    evt: GlobalEventHandlersEventMap[K]
  ) => void
}

type Children = { children?: any }

type IUnsubscriber = () => any

interface ISubscribable<T> {
  subscribe(
    subscriber: (value: T, ...args: any) => any
  ): IUnsubscriber | { unsubscribe: IUnsubscriber }
}

interface IThenable<T> {
  then(resolver: (value: T, ...args: any) => any): any
}

type ISubscribableOrThenable<T> = ISubscribable<T> | IThenable<T>

// prettier-ignore
type ISubscribableOrThenableDeep<T> =
  | ISubscribableOrThenable<T>
  | ISubscribableOrThenable<ISubscribableOrThenable<T>>
  | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<T>>>
  | ISubscribableOrThenable<ISubscribableOrThenable<ISubscribableOrThenable<
    ISubscribableOrThenable<T>
    >>>

type ToMaybeSubscribableOrThenable<T> = {
  [K in keyof T]: T[K] | ISubscribableOrThenableDeep<T[K]>
}

type IntristicsFactory<T, ElementTagNameMap, Element> = {
  [K in keyof T]: Partial<
    ToMaybeSubscribableOrThenable<
      Omit<
        T[K] &
          GlobalAttributes &
          Omit<
            K extends keyof ElementTagNameMap ? ElementTagNameMap[K] : Element,
            'children' | keyof T[K] | keyof GlobalAttributes
          >,
        'style' | 'class' | `on${string}`
      > & {
        style: StyleBasic
        class: ClassBasic
      } & StyleExtra &
        ClassExtra &
        Events
    >
  >
}

// prettier-ignore
// type Intristics =
//   IntristicsFactory<Omit<JSX_SVG, keyof JSX_HTML>, SVGElementTagNameMap, SVGElement> &
//   IntristicsFactory<JSX_HTML, HTMLElementTagNameMap, HTMLElement>

type I_SVG = IntristicsFactory<JSX_SVG, SVGElementTagNameMap, SVGElement>
type I_HTML = IntristicsFactory<JSX_HTML, HTMLElementTagNameMap, HTMLElement>

type Intristics = Omit<I_HTML, keyof I_SVG> & {
  [K in keyof I_SVG]: K extends keyof I_HTML ? I_HTML[K] | I_SVG[K] : I_SVG[K]
}

export type { Intristics as IntrinsicElements }

// type _IPropsForRElement = {
//   [K in keyof Intristics]: {
//     node:
//       | K
//       | (K extends keyof SVGElementTagNameMap
//           ? SVGElementTagNameMap[K]
//           : K extends keyof HTMLElementTagNameMap
//           ? HTMLElementTagNameMap[K]
//           : null)
//   } & Intristics[K]
// }

// export type IRElementProps = _IPropsForRElement[keyof _IPropsForRElement]

declare global {
  namespace JSX {
    type ElementType = any
    // interface Element {}
    // interface ElementClass {}
    // interface ElementClass extends React.Component<any> {
    //   render(): React.ReactNode
    // }

    // interface ElementAttributesProperty {
    //   props: {}
    // }
    interface ElementChildrenAttribute {
      children: {}
    }

    // type LibraryManagedAttributes<C, P> = GlobalJSXLibraryManagedAttributes<C, P>;

    interface IntrinsicAttributes {
      // 'r-onBeforeReady'?: (iam: Rease) => any
      // 'r-onReady'?: (iam: Rease) => any
      // 'r-onBeforeDestroy'?: (iam: Rease) => any
      // 'r-onDestroy'?: (iam: Rease) => any
      // // 'r-onBeforeMove'?: (iam: Rease) => any
      // 'r-onMove'?: (iam: Rease) => any
    }
    // interface IntrinsicClassAttributes extends IntrinsicAttributes {}

    interface IntrinsicElements extends Intristics {
      // 'r-text': { this: any } & Children
      // 'r-element': { this: string | Element | null; [k: string]: any } & Children
      // 'r-fragment': {} & Children

      // 'r-for-in': {
      //   this: any
      //   watch?: any
      //   children: (v: any, k: string, a: any) => any
      // }
      // 'r-for-of': {
      //   this: any
      //   watch?: any
      //   children: (v: any, k: string | number, a: any) => any
      // }

      // 'r-if': { this: any; context?: any } & Children
      // 'r-else-if': { this: any; context?: any } & Children
      // 'r-else': { context?: any } & Children

      // 'r-await': { this: any; context?: any } & Children
      // 'r-then': { this: any; context?: any } & Children
      // 'r-catch': { this: any; context?: any } & Children

      // 'r-move': {
      //   to: ISubscribableOrThenableDeep<Rease>
      //   index?: ISubscribableOrThenableDeep<number>
      // } & Children

      // 'r-switch': { this: any } & Children
      // 'r-case': { this: any; context?: any } & Children

      // 'r-watch': { this: any; context?: any } & Children
      // [key: string]: any
    }
  }
}
