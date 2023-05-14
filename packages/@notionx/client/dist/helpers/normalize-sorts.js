"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeSorts = void 0;
var lodash_1 = require("lodash");
function normalizeSorts(schema, sorts) {
    return sorts
        ? (0, lodash_1.entries)(sorts).map(function (_a) {
            var key = _a[0], direction = _a[1];
            var property = schema[key];
            return {
                property: 'id' in property ? property.id : property.name,
                direction: direction,
            };
        })
        : [];
}
exports.normalizeSorts = normalizeSorts;
//# sourceMappingURL=normalize-sorts.js.map