(function () {
    'use strict';

    if (!('addProperties' in Array.prototype)) {
        Object.defineProperty(Array.prototype, 'addProperties', {value: addProperties});
    }

    if (!('toNamedArray' in Object.prototype)) {
        Object.defineProperty(Object.prototype, 'toNamedArray', {value: toNamedArray});
    }

    /**
     * @param {} [options]
     * Property options
     *
     * @param {boolean} [options.configurable=true]
     * @param {boolean} [options.enumerable=false]
     * @param {boolean} [options.writable=false]
     *
     * @returns {Array}
     */
    function toNamedArray(options) {
        var keys = Object.keys(this);
        var res = new Array(keys.length);
        for (var i = 0; i < keys.length; i++) {
            res[i] = this[keys[i]];
        }
        return res.addProperties(keys, options);
    }

    /**
     * @param props
     *
     * @param {} [options]
     * Property options
     *
     * @param {boolean} [options.configurable=true]
     * @param {boolean} [options.enumerable=false]
     * @param {boolean} [options.writable=false]
     *
     * @returns {Array}
     */
    function addProperties(props, options) {
        if (!Array.isArray(props)) {
            throw new TypeError('Parameter "props" must be an array.');
        }
        if (props.length > this.length) {
            throw new TypeError('Number of properties (' + props.length + ') exceeds the target array length (' + this.length + ')');
        }
        var opt = {
            configurable: (options && 'configurable' in options) ? options.configurable : true,
            enumerable: (options && 'enumerable' in options) ? options.enumerable : false,
            writable: (options && 'writable' in options) ? options.writable : false
        };
        props.forEach(function (p, idx) {
            if (p in this) {
                throw new Error('Cannot add property ' + JSON.stringify(p) + ', as it already exists.');
            }
            var config = {
                configurable: opt.configurable,
                enumerable: opt.enumerable,
                get: function () {
                    return this[idx];
                }
            };
            if (opt.writable) {
                config.set = function (newValue) {
                    return this[idx] = newValue;
                };
            }
            Object.defineProperty(this, p, config);
        }, this);
        return this;
    }
})();
