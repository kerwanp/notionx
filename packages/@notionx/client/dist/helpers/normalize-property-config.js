"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizePropertyConfig = void 0;
function normalizePropertyConfig(key, config) {
    if (typeof config === 'string') {
        return {
            key: key,
            name: key,
            type: config,
        };
    }
    return __assign({ key: key }, config);
}
exports.normalizePropertyConfig = normalizePropertyConfig;
