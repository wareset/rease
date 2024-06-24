import { init, PROPERTIES } from './__core__/init';
export { init as _cssInit, PROPERTIES as _cssProperties };
export declare const css: (template: TemplateStringsArray | string[], ...values: any[]) => {
    readonly [key: `_${string}`]: string;
    readonly id: string;
    readonly text: string;
    readonly destroy: () => void;
};
