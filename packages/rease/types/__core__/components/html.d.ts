import { Rease } from '../Rease';
type Element = HTMLElement | SVGElement;
export declare class RText extends Rease {
    data: string;
    readonly node: HTMLFontElement | null;
    constructor({ this: is }: {
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
    constructor({ children, this: is, ...props }: {
        this: string | Element | null;
        [k: string]: any;
    });
}
export {};
