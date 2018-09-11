(function () {
    'use strict';

    if (!('addProperties' in Array.prototype)) {
        Array.prototype.addProperties = addProperties;
    }

    if (!('toNamedArray' in Object.prototype)) {
        Object.prototype.toNamedArray = toNamedArray;
    }

    function toNamedArray(options) {
        var keys = Object.keys(this);
        var res = new Array(keys.length);
        for (var i = 0; i < keys.length; i++) {
            res[i] = this[keys[i]];
        }
        return res.addProperties(keys, options);
    }

    function addProperties(props, options) {
        if (!Array.isArray(props)) {
            throw new TypeError('Parameter "props" must be an array.');
        }
        if (props.length > this.length) {
            throw new TypeError('Number of properties cannot exceed the target array length.');
        }
        props.forEach(function (p, idx) {
            if (p in this) {
                throw new Error('Cannot add property ' + JSON.stringify(p) + ', as it already exists.');
            }
            var config = {
                configurable: options && options.configurable,
                enumerable: options && options.enumerable,
                get: function () {
                    return this[idx];
                }
            };
            if (options && options.writable) {
                config.set = function (newValue) {
                    return this[idx] = newValue;
                };
            }
            Object.defineProperty(this, p, config);
        }, this);
    }
})();
