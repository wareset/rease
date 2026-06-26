# @rease/hash

String hash or random hash generator.

All received hash strings always start with characters from `a` to `z`.

## Usage

```js
import { hash } from '@rease/hash'

const hashedString = hash('some string')
console.log(hashedString) // e74obg8nj9c

const hashedRandom = hash()
console.log(hashedRandom) // jk45q1xw6u8 (or any other)
```
