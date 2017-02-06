# increment-generator

Literally just counts numbers.

Implemented with generators even though it's not very performant.

```javascript
import incrementGenerator from 'increment-generator'

const counter = incrementGenerator()

console.log(counter()) // -> 1
console.log(counter()) // -> 2
console.log(counter()) // -> 3
console.log(counter()) // -> 4
```

