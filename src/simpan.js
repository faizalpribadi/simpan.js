/**
 * @license Simpan.js v0.1.0
 * (c) 2015 Faizal Pribadi http://faizalpribadi.github.io/simpan.js
 * License: MIT
 */
;
(function(root, factory) {
    // require.js supported for browser
    if ('function' === typeof define && define.amd) {
        define(factory);
    } else if ('object' === typeof exports) { // Node.js common support
        module.exports = factory;
    } else {
        root.simpan = factory();
    }
})(this, function() {
    // use strict
    'use strict';

    // global defined localstorage API
    var wls = window.localStorage;

    return {
        /**
         * Store and define the key and value 
         * 
         * @param {[string]} key   [key argument must be string]
         * @param {[string]} value [value argument must be string]
         */
        set: function(key, value) {
            if (undefined !== key && value) {
                wls[key] = JSON.stringify(value);
            }
        },

        /**
         * Get the value from key 
         * 
         * @param  {[string]} key [key name]
         * 
         * @return {string|object}     get the value from key
         */
        get: function(key) {
            var value = wls[key];
            if (undefined !== value) {
                return JSON.parse(value);
            }
        },

        /**
         * [delete description]
         * @param  {[type]} key [description]
         * @return {[type]}     [description]
         */
        delete: function(key) {
            if (wls.hasOwnProperty(key)) {
                delete wls[key];
            }
        },

        /**
         * [clear description]
         * @return {[type]} [description]
         */
        clear: function() {
            wls.clear();
        }
    }
});
