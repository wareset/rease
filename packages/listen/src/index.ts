// export type ToIReaseGlobalEventHandlersEventMap<T> = {
//   [Key in keyof T & string as `${Key}${'' | `-${string}`}`]: T[Key]
// }
// export type IReaseGlobalEventHandlersEventMap =
//   ToIReaseGlobalEventHandlersEventMap<GlobalEventHandlersEventMap>

export const listen = (function (setTimeout) {
  const PACKAGE = '@rease/listen: '

  function noop() {}

  if (typeof window === 'undefined') {
    return function () {
      return noop
    } as typeof listen
  }

  function isWindow(v: any): v is Window {
    return v && v.document && v.document.defaultView === v
  }
  // function isDocument(v: any): v is Document {
  //   return v && v.defaultView && v.defaultView.document === v
  // }

  function createCustomEvent<T = any>(
    type: string,
    detail?: T,
    bubbles?: boolean,
    cancelable?: boolean
  ): CustomEvent<T> {
    const e = document.createEvent('CustomEvent')
    e.initCustomEvent(type, bubbles, cancelable, detail)
    return e
  }

  const MODIFIERS = {
    once: 1,
    strict: 1,

    // focused: 1,

    self: 1,
    trusted: 1,

    stop: 1,
    prevent: 1,

    capture: 1,
    passive: 1
  }

  let defineTargetForCustomEvent = function (E: any, event: any) {
    const defineProperty = Object.defineProperty
    return (defineTargetForCustomEvent = function (E: any, event: any) {
      const props = { value: E, enumerable: true }
      defineProperty(event, 'srcElement', props)
      defineProperty(event, 'target', props)
      return event
    })(E, event)
  }

  // let FOCUSED_ELEMENT: null | Element = null
  let PRESSED_KEYS: { [key: string]: [string, string] } = {}
  const WINDOW = window

  let add_event_listener = function <T extends keyof GlobalEventHandlersEventMap>(
    E: EventTarget,
    type: T,
    fn: (e: GlobalEventHandlersEventMap[T]) => void,
    capture: boolean | undefined,
    passive: boolean | undefined
  ): () => void {
    let isPassive: boolean = false
    try {
      WINDOW.addEventListener(
        'test' as any,
        noop,
        Object.defineProperty({}, 'passive', {
          get(): any {
            return (isPassive = true)
          }
        })
      )
    } catch {}

    add_event_listener = function (E, type, fn, capture, passive) {
      const options: any = isPassive ? { capture, passive } : capture
      E.addEventListener(type, fn as any, options)
      return function () {
        E && (E.removeEventListener(type, fn as any, options), (E = null as any))
      }
    } as typeof add_event_listener

    add_event_listener(
      WINDOW,
      'blur',
      function () {
        PRESSED_KEYS = {}
        // FOCUSED_ELEMENT = null
      },
      true,
      true
    )
    // add_event_listener(WINDOW, 'focus', function (e) {
    //   FOCUSED_ELEMENT = e.target === WINDOW ? null : e.target as Element
    // }, true, true)
    add_event_listener(
      WINDOW,
      'keyup',
      function (e) {
        delete PRESSED_KEYS[e.code + e.key]
      },
      false,
      true
    )
    add_event_listener(
      WINDOW,
      'keydown',
      function (e) {
        PRESSED_KEYS[e.code + e.key] = [e.code, e.key]
      },
      true,
      true
    )

    return add_event_listener(E, type, fn, capture, passive)
  }

  let onCustomResize = function (E: any): any {
    const KEY_DATA = '_rease_resize'
    type IResizeData = {
      m?: MutationObserver
      u?: () => void
      c: number
      w: number
      h: number
    }

    type IElement = (HTMLElement | SVGElement) & { [KEY_DATA]: IResizeData | null }

    function checkData(E: IElement): void {
      const data = E[KEY_DATA],
        w = E.clientWidth,
        h = E.clientHeight
      if (data && (w !== data.w || h !== data.h)) {
        ;(data.w = w), (data.h = h), E.dispatchEvent(createCustomEvent('resize'))
      }
    }

    function initData(E: IElement): void {
      E[KEY_DATA] = { c: 0, w: E.clientWidth, h: E.clientHeight }
      // checkData(E)
    }

    let Observer: any
    if ((Observer = WINDOW.ResizeObserver)) {
      // console.info(PACKAGE + 'ResizeObserver')
      const observer = new Observer(function (a: ResizeObserverEntry[]) {
        for (let i = 0; i < a.length; i++) checkData(a[i].target as IElement)
      })
      onCustomResize = function (E: IElement) {
        if (!E[KEY_DATA]) initData(E), observer.observe(E)
        let data = E[KEY_DATA]
        data!.c++
        return function (): void {
          if (data) {
            if (--data.c < 1) observer.unobserve(E), (E[KEY_DATA] = null)
            data = null as any
          }
        }
      }
    } else if ((Observer = WINDOW.MutationObserver)) {
      // console.info(PACKAGE + 'MutationObserver')
      const config = {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      }
      onCustomResize = function (E: IElement) {
        if (!E[KEY_DATA]) {
          function check() {
            checkData(E)
          }
          const view = E.ownerDocument.defaultView
          initData(E)
          ;(E[KEY_DATA]!.m = new Observer(check)).observe(E, config)
          E[KEY_DATA]!.u = view ? add_event_listener(view, 'resize', check, true, true) : noop
        }
        let data = E[KEY_DATA]
        data!.c++
        return function () {
          if (data) {
            if (--data.c < 1) data.m!.disconnect(), data.u!(), (E[KEY_DATA] = null)
            data = null as any
          }
        }
      }
    } else {
      // console.info(PACKAGE + 'setTimeout')
      let allowLoop = true
      const ELEMENTS: IElement[] = []
      function loop(): void {
        if (allowLoop) {
          allowLoop = false
          for (let i = 0, E: IElement; i < ELEMENTS.length; i++) {
            checkData((E = ELEMENTS[i]))
            if (!E[KEY_DATA]!.c) (E[KEY_DATA] = null), ELEMENTS.splice(i--, 1)
          }
          if (ELEMENTS.length && !document.hidden) setTimeout(loop, 25)
          allowLoop = true
        }
      }

      add_event_listener(document, 'visibilitychange' as any, loop, true, true)

      onCustomResize = function (E: IElement) {
        if (ELEMENTS.indexOf(E) < 0) initData(E), ELEMENTS.push(E)
        let data = E[KEY_DATA]!
        data.c++, setTimeout(loop)
        return function () {
          data && (--data.c, (data = null as any))
        }
      }
    }

    return onCustomResize(E)
  }

  function listen<Type extends keyof GlobalEventHandlersEventMap>(
    E: Window | Document | Element,
    type: `${Type}${'' | `-${string}`}`,
    callback: (e: GlobalEventHandlersEventMap[Type]) => void
  ): () => void {
    const callbackOrigin = callback
    // const { TYPE, MODS, KEYS, KLEN } = parseEventType(type)

    const MODS = {} as Record<keyof typeof MODIFIERS, boolean>
    const KEYS: any = {},
      OPTS: string[] = []
    let TYPE!: string,
      KLEN = 0

    for (let is = 0, step = 0, word = '', l = type.length, i = 0; i <= l; i++) {
      if (i === l || (is++ && type[i] === '-')) {
        is = 0
        if ((MODIFIERS as any)[word] === 1) {
          ;(MODS as any)[word] = true
        } else if (word.length === 1 || /[A-Z]/.test(word[0])) {
          word in KEYS || ((KEYS[word] = true), KLEN++)
        } else if (step === 0) {
          TYPE = word
        } else {
          OPTS.push(word)
        }
        ;(word = ''), step++
      } else {
        word += type[i]
      }
    }

    // console.log({ TYPE, MODS, KEYS, KLEN, OPTS })

    let unsub: ReturnType<typeof add_event_listener> = noop

    if (KLEN > 0) {
      TYPE || (TYPE = 'keydown')
      // @ts-ignore
      E.tabIndex >= 0 || (E.tabIndex = 0)
      // E.tabIndex >= 0 || ((E.tabIndex = 0), E.style && (E.style.outline || (E.style.outline = 'none')))
    }

    if (TYPE) {
      if (TYPE === 'load' && !isWindow(E)) {
        callback.call(E, defineTargetForCustomEvent(E, createCustomEvent(TYPE)))
        return noop
      }

      if (MODS.once) {
        let cb = callback
        callback = function (this: any, e: any) {
          unsub(), cb.call(this, e), (cb = noop)
        }
      }

      // if (MODS.focused) {
      //   const cb = callback
      //   callback = function(this: any, e: any) {
      //     let target = e.target as HTMLElement
      //     if (FOCUSED_ELEMENT) {
      //       for (let isE = false; target; target = target.parentElement!) {
      //         if (target === E) isE = true
      //         if (target === FOCUSED_ELEMENT) { isE && cb.call(this, e); break }
      //         if (target.tabIndex >= 0) break
      //       }
      //     }
      //   }
      // }

      if (MODS.self) {
        const cb = callback
        callback = function (this: any, e: any) {
          e.target === E && cb.call(this, e)
        }
      }
      if (MODS.trusted) {
        const cb = callback
        callback = function (this: any, e: any) {
          e.isTrusted && cb.call(this, e)
        }
      }

      if (MODS.stop) {
        const cb = callback
        callback = function (this: any, e: any) {
          e.stopPropagation(), cb.call(this, e)
        }
      }
      if (MODS.prevent) {
        const cb = callback
        callback = function (this: any, e: any) {
          e.preventDefault(), cb.call(this, e)
        }
      }

      if (MODS.strict || KLEN) {
        const cb = callback
        callback = function (this: any, e: any) {
          let n = KLEN
          for (const k in PRESSED_KEYS) {
            const keys = PRESSED_KEYS[k]
            if (keys[0] in KEYS || keys[1] in KEYS) n--
            else return
          }
          !n && cb.call(this, e)
        }
      }

      // fix
      if (callback === callbackOrigin) {
        const cb = callback
        callback = function (this: any, e: any) {
          cb.call(this, e)
        }
      }

      unsub = add_event_listener(E, TYPE as any, callback as any, !!MODS.capture, !!MODS.passive)

      if (TYPE === 'resize') {
        if (isWindow(E)) {
          // E.dispatchEvent(createCustomEvent('resize'))
        } else {
          const un = unsub,
            un2 = onCustomResize(E)
          unsub = function () {
            un(), un2()
          }
        }
        callback.call(E, defineTargetForCustomEvent(E, createCustomEvent(TYPE)))
      }
    } else {
      throw PACKAGE + 'event: ' + type
    }

    return unsub
  }

  return listen
})(setTimeout)

// listen<'mousedown'>(window, 'mousedown-capture', (e) => {
//   console.log(e)
// })
