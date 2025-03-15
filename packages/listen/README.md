# @rease/listen

A more functional event listening system

## Usage

### Base

```js
import { listen } from '@rease/listen'

const el = document.querySelector('.some_div')
const fn = (e) => console.log(e)

const destroy = listen(el, 'click', fn)
// Like el.addEventListener('click', fn, { capture: false, passive: false })

destroy()
// Like el.removeEventListener('click', fn, { capture: false, passive: false })
```

### Modifiers

```js
// !!! All modifiers can be written in any order !!!

/*
 capture and passive
*/
listen(el, 'click-capture', fn)
// Like el.addEventListener('click', fn, { capture: true, passive: false })

listen(el, 'click-passive', fn)
// Like el.addEventListener('click', fn, { capture: false, passive: true })

listen(el, 'click-passive-capture', fn)
// or
listen(el, 'click-capture-passive', fn)
// Like el.addEventListener('click', fn, { capture: true, passive: true })

/*
 preventDefault and stopPropagation
*/
listen(el, 'click-stop', fn)
// The el.stopPropagation() will be executed automatically.

listen(el, 'click-prevent', fn)
// The el.preventDefault() will be executed automatically.

/*
 self and trusted
*/
listen(el, 'click-self', fn)
// It will be executed only if you click on the 'el' itself.

listen(el, 'click-trusted', fn)
// It will only work if the event is original.
// el.click() won't work.

/*
 once
*/
listen(el, 'click-once', fn)
// The event will be triggered only once and unsubscription will occur.

/*
 strict
*/
listen(el, 'click-strict', fn)
// The click will be triggered only if the keys are not pressed.
```

### Keyboard

```js
listen(window, 'keydown', (e) => {
  /*
     This event (KeyboardEvent) has string properties 'code' and 'key'.
     You can use them to work with the keyboard.
  */
})

listen(el, 'keydown', fn)
// In this case, the 'tabIndex' will be automatically assigned to the 'el'.
// The 'keydown' event will be executed only if the 'el' is in focus.

// Working with the keys:

// sample
listen(el, 'keydown-a', fn)
// The event is triggered only when the latin lower 'A' button is pressed.

listen(el, 'keydown-A', fn)
// The event is triggered only when the latin upper 'A' button is pressed.

listen(el, 'keydown-KeyA', fn)
// The event is triggered only when the any KeyA button is pressed.

listen(el, 'keydown-Ф', fn)
// The event is triggered only when the cyrillic upper 'Ф' button is pressed.

listen(el, 'keydown-Shift', fn)
// The event is triggered only when the any Shift button is pressed.

listen(el, 'keydown-ShiftLeft', fn)
// The event is triggered only when the left Shift button is pressed.

listen(el, 'keydown-KeyA-Shift', fn)
// The event is triggered only when the KeyA and Shift buttons are pressed.

// Now let's replace 'keydown' with 'click':

listen(el, 'click-a', fn)
// The click will be triggered only if you hold down latin lower 'A'.

listen(el, 'click-A', fn)
// The click will be triggered only if you hold down latin upper 'A'.

listen(el, 'click-Shift', fn)
// The click will be triggered only if you hold down any Shift buttons.

listen(el, 'click-KeyA-ShiftLeft', fn)
// The click will be triggered only if you hold down KeyA and ShiftLeft.
```

### Resize

```js
listen(window, 'resize', fn)
// The 'fn' will be called automatically instantly.
// The following calls will be standard.

// The 'resize' event is triggered on all elements.

listen(el, 'resize', fn)
// The 'fn' will be called automatically instantly.
// Further calls will be made only when the size is changed.
```

### Load

```js
listen(window, 'load', fn)
// If the load has already occurred, the 'fn' will be called immediately.

listen(el, 'load', fn)
// The function is always called immediately.
// This is necessary to get the element, if there is no other way.
// There will be no listening and the "destroy" does not have to be called.
```
