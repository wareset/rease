# @rease/css

css in js

Features:

- Nesting (uses the symbol `&`, like less and scss). After conversion, a standard valid code is created.
- All the rules are correctly combined during the conversion. Kinds of rules:
  - `@media`;
  - `@scope`;
  - `@supports`;
  - `@container`;
  - etc.
- Scoped classes. All classes that start with the `_` character will receive an additional salt.
- The browser automatically adds prefixes (`webkit`, `moz`, `ms`) if necessary.
- Support for block comments.

## Usage

```js
import { css } from '@rease/css'

const COLOR = 'red'

const style = css`
  .block {
    display: block;

    &__element {
      color: ${COLOR};

      @media (min-width: 900px) {
        color: green;

        @supports (display: flex) {
          display: flex;
        }

        @media (max-width: 1900px) {
          color: lime;
        }
      }
    }

    /* 
      Block comment.
    
      Symbol '&' needed for nesting.
    */
    .outer_class > & > span {
      /* 
        A '-webkit-' or '-khtml-' or '-moz-' or '-ms-'
        will be added to this property.
      */
      user-drag: none;
    }

    /*
      This is a scoped class, since it starts with the symbol '_'.
    */
    ._scoped_class {
      position: relative;
    }
  }
`

console.log(style)
```

As a result, we get such an object:

```js
style ===
  {
    /*
      This function removes the style element from the DOM.

      !!! Important !!!
      All styles are cached, based strictly on the input data.

      If the same styles were created several times,
      then there will be only one style element in DOM.

      And it will be deleted only when the 'destroy' function
      is called for all its creators.
    */
    destroy: () => {},

    // Will become true after calling the 'destroy' function
    destroyed: false

    // ID for for style element and salt for scoped classes
    id: 'rcss_1',

    // scoped class
    _scoped_class: 'rcss_1_scoped_class',

    // final css
    css: '.block{display:block;}.block__element{color:red;}@media...',
  }
```

Formatted CSS example of what happened:

```css
.block {
  display: block;
}

.block__element {
  color: red;
}

@media (min-width: 900px) {
  .block__element {
    color: green;
  }

  @supports (display: flex) {
    .block__element {
      display: flex;
    }
  }
}

@media (min-width: 900px) and (max-width: 1900px) {
  .block__element {
    color: lime;
  }
}

.outer_class > .block > span {
  -webkit-user-drag: none;
}

.block .rcss_1_scoped_class {
  position: relative;
}
```
