import { Rease } from '../Rease';
type Element = HTMLElement | SVGElement;
declare class _RNode_ extends Rease {
}
export declare class RHtml extends _RNode_ {
    data: string;
    readonly nodes: Node[];
    _pNode: Element | null | undefined;
    _bNode: Element | null | Node;
    constructor(props: {
        this: any;
    });
}
export declare class RText extends _RNode_ {
    data: string;
    readonly node: HTMLFontElement | null;
    constructor(props: {
        this: any;
    });
}
export declare class RElement extends _RNode_ {
    readonly type: string;
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
