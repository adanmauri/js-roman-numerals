# What is JavaScript Roman Numerals
JavaScript Roman Numerals is a library that adds new methods to JavaScript's strings and numbers in order to convert arabic and roman numerals.

## String.deromanize()
### Definition and Usage
The deromanize method converts a roman numeral string to its corresponding arabic numeral number.

### Syntax
```js
string.deromanize()
```

### Example

Returns a number which is the corresponding arabic number of "MMXVII":

```js
var num = "MMXVII".deromanize();
```
The result of *num* will be:
```js
2017
```

## Number.romanize()
### Definition and Usage
The romanize method converts a arabic numeral number to its corresponding roman numeral string.

### Syntax
```js
number.romanize()
```

#### Example

Returns a number which is the corresponding arabic number of 2017:
```js
var num = (2017).romanize();
```
The result of *num* will be:
```js
MMXVII
```
