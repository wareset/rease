import { Rease } from '.';
import { noop } from '.';
export declare class RMove extends Rease {
    constructor({ is, index, children }: {
        is: any;
        index?: any;
        children?: any;
    });
}
type Element = HTMLElement | SVGElement;
export declare class RText extends Rease {
    _data: string;
    node: HTMLFormElement | null;
    constructor({ data: is }: {
        data: any;
    });
}
export declare class RElement extends Rease {
    localName: string;
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
export declare class RFragment extends Rease {
    constructor({ children }: {
        children?: any;
    });
}
export declare class RWatch extends Rease {
    constructor({ children, is }: {
        children?: any;
        is: any;
    });
}
export declare class RIf extends Rease {
    constructor({ children, is }: {
        children?: any;
        is: any;
    });
}
export declare class RElseIf extends Rease {
    constructor({ children, is }: {
        children?: any;
        is: any;
    });
}
export declare class RElse extends Rease {
    constructor({ children }: {
        children?: any;
    });
}
export declare class RSwitch extends Rease {
    _is: any;
    constructor({ children, is }: {
        children?: any;
        is: any;
    });
}
export declare class RCase extends Rease {
    _is: any;
    _ctx: {
        r: RCase;
        b: boolean;
        c: any;
        i?: any;
        u: typeof noop;
    };
    constructor({ children, is }: {
        children?: any;
        is: any;
    });
}
export declare class RForIn extends Rease {
    constructor({ is, watch, children, }: {
        is: any;
        watch?: any;
        children: (v: any, k: string, a: any) => any;
    });
}
export declare class RForOf extends Rease {
    _is: any;
    constructor({ is, watch, children, }: {
        is: any;
        watch?: any;
        children: (v: any, k: string | number, a: any) => any;
    });
}
export {};
