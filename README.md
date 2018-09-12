named-array
-----------

Access array elements via names, within ES5 standard.

Works in all browsers and Node.js versions.

# Installing

```
$ npm install named-array
```

# Usage

* In a web browser

```html
<script src = "./named-array.min.js"></script>

<script>
    var obj = {first: 1, second: 2};
    var a = obj.toNamedArray();
    // obj.first = a[0];
    // obj.second = a[1];
</script>
```

* In Node.js

```js
require('named-array');

var a = [1, 2, 3];
a.addProperties(['first', 'second']);
// a[0] = a.first
// a[1] = a.second
```

# API

The API safely extends `Array` + `Object` prototypes with 2 new methods, as documented below.

### `Array.prototype.addProperties(props, [options]) => Array`

Safely adds specified properties to the array object. And if you try adding a property that already
exists on the array object, an error will be thrown. For example, you cannot add properties like
`length`, `map`, etc, see [Array API] for existing methods and properties.

**Parameters**

* `props` - array of strings, with names for the properties
* `[options] = {[configurable], [enumerable], [writable]}`, with the same meaning and defaults as for [Object.defineProperty].

### `Object.prototype.toNamedArray([options]) => Array`

Converts an object into a named array.

**Parameters**

* `[options] = {[configurable], [enumerable], [writable]}`, with the same meaning and defaults as for [Object.defineProperty].

[Object.defineProperty]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
[Array API]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
