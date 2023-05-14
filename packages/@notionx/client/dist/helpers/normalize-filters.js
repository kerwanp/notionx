"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeFilters = void 0;
var class_transformer_1 = require("class-transformer");
var lodash_1 = require("lodash");
function normalizeFilters(schema, filters, root) {
    var _a, _b;
    if (filters === void 0) { filters = []; }
    if (root === void 0) { root = true; }
    if (!filters)
        return [];
    var output = [];
    for (var _i = 0, filters_1 = filters; _i < filters_1.length; _i++) {
        var f = filters_1[_i];
        for (var _c = 0, _d = (0, lodash_1.entries)(f); _c < _d.length; _c++) {
            var _e = _d[_c], key = _e[0], filter = _e[1];
            if (!filter)
                continue; // TODO: Check why type says it can be undefined
            if (['or', 'and'].includes(key)) {
                output.push((_a = {},
                    _a[key] = normalizeFilters(schema, filter, false),
                    _a));
            }
            else {
                var property = schema[key];
                output.push((_b = {
                        property: 'name' in property ? property.name : property.id
                    },
                    _b[property.type] = (0, class_transformer_1.instanceToPlain)(filter),
                    _b));
            }
        }
    }
    if (root) {
        return output.length > 1 ? { and: output } : output[0];
    }
    return output;
}
exports.normalizeFilters = normalizeFilters;
//# sourceMappingURL=normalize-filters.js.map