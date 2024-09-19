import { Rease } from '../Rease';
type Element = HTMLElement | SVGElement;
export declare class RText extends Rease {
    _data: string;
    node: HTMLFontElement | null;
    constructor({ data: is }: {
        data: any;
    });
}
export declare class RElement extends Rease {
    name: string;
    node: Element | null;
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
    constructor({ children, node, ...props }: {
        node: string | Element | null;
        [k: string]: any;
    });
}
export {};
