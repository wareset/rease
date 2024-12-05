import { Rease } from '../Rease';
type Element = HTMLElement | SVGElement;
export declare class RText extends Rease {
    data: string;
    readonly node: HTMLFontElement | null;
    constructor(props: {
        this: any;
    });
}
export declare class RElement extends Rease {
    readonly name: string;
    readonly node: Element | null;
    _attrs: {
        [key: string]: any;
    };
    _class?: {
        [key: string]: any;
    };
    _style?: {
        [key: string]: any;
    };
    _unevt?: (() => void)[];
    constructor(props: {
        this: string | Element | null;
        children?: any;
        [k: string]: any;
    });
}
export {};
