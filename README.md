Function to validate IMEI.

## Installation and Usage

Install the function with `npm install isvalidimei`

#### No ES6

```javascript
var isValidImei = require('isValidImei');

isValidImei('123456789012347'); // true
isValidImei('123456789012345'); // false
```

#### ES6

```javascript
import isValidImei from 'isValidImei';

isValidImei('123456789012347'); // true
isValidImei('123456789012345'); // false
```
