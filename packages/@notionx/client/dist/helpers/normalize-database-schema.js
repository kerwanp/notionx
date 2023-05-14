"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeDatabaseSchema = void 0;
var lodash_1 = require("lodash");
function normalizeDatabaseSchema(schema) {
    return (0, lodash_1.mapValues)(schema, function (v, key) {
        return typeof v === 'string' ? { name: key, type: v } : v;
    });
}
exports.normalizeDatabaseSchema = normalizeDatabaseSchema;
//# sourceMappingURL=normalize-database-schema.js.map