"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deserializePage = exports.deserialize = void 0;
var class_transformer_1 = require("class-transformer");
var lodash_1 = require("lodash");
var page_1 = require("../classes/page");
function deserialize(client, cls, plain) {
    var instance = (0, class_transformer_1.plainToInstance)(cls, plain);
    instance.client = client;
    return instance;
}
exports.deserialize = deserialize;
function deserializePage(client, schema, data) {
    var page = deserialize(client, page_1.Page, data);
    var _loop_1 = function (key, config) {
        var property = void 0;
        if ('name' in config) {
            property = data.properties[config.name];
        }
        else {
            property = Object.values(data.properties).find(function (p) { return p.id === config.id; });
        }
        if (!property)
            throw new Error("Property \"".concat(key, "\" does not exist in the database\""));
        page[key] = property[config.type];
    };
    for (var _i = 0, _a = (0, lodash_1.entries)(schema); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], config = _b[1];
        _loop_1(key, config);
    }
    return page;
}
exports.deserializePage = deserializePage;
//# sourceMappingURL=serialize.js.map