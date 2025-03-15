import { init as _cssInit, PROPERTIES as _cssProperties } from './__core__/init';
export { _cssInit, _cssProperties };
type CSSObj = {
    readonly [key: `_${string}`]: string;
    readonly id: string;
    readonly css: string;
    readonly destroy: () => void;
};
export declare function css(template: TemplateStringsArray | string[], ...values: any[]): CSSObj;
