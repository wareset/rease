declare function _listen<Type extends keyof GlobalEventHandlersEventMap>(E: Window | Document | HTMLElement | SVGElement, type: `${Type}${'' | `-${string}`}`, callback: (e: GlobalEventHandlersEventMap[Type]) => void): () => void;
export declare const listen: typeof _listen;
export {};
