# Pizza math

Calculates the best value pizza!

## Setup

Install the package using NPM: `npm install pizza-math`. Then require it in Node (CommonJS):

```js
const pizzaMath = require('pizza-math')
```

Or ES6:

```js
import pizzaMath from 'pizza-math'
```

You may also include `pizza-math` directly in your HTML, which will define a public variable `pizzaMath`. Download `dist/pizza-math.js` to your project directory and include it in your HTML with:

```html
<script src="path/to/pizza-math.js"></script>
```

## Usage

Calculate the area of a pizza based on its diameter:

```js
const diameter = 10         // 10 inches
pizzaMath.getArea(diameter) // 78.5398...
```

Get the value of a pizza, in square inches per $ (higher is better):

```js
const diameter = 10   // 10 inches
const cost = 15       // $15.00
pizzaMath.getValue(diameter, cost)  // 5.2359...
```

Get the ratio of values between two pizzas.
Each pizza must be specified as an object with fields `diameter` and `cost`.
The result is the second pizza's value divided by the first:

```js
const pizza1 = { diameter: 10, cost: 15 }     // Value: 5.24
const pizza2 = { diameter: 12.5, cost: 18 }   // Value: 6.82
pizzaMath.getRatio(pizza1, pizza2)            // 1.3020...
```

## Credits

[Erik Koopmans](https://github.com/eKoopmans)

## License

[The ISC License](https://opensource.org/licenses/ISC)

Copyright (c) 2020 Erik Koopmans
