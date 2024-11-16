import { Rease } from '../Rease';
type Element = HTMLElement | SVGElement;
export declare class RText extends Rease {
    _is: string;
    node: HTMLFontElement | null;
    text: Text | null;
    constructor({ is }: {
        is: any;
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
    constructor({ children, is, ...props }: {
        is: string | Element | null;
        [k: string]: any;
    });
}
export {};
