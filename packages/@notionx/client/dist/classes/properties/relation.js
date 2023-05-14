"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationFilter = void 0;
var class_transformer_1 = require("class-transformer");
// TODO: Relation system
var RelationFilter = exports.RelationFilter = /** @class */ (function () {
    function RelationFilter() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], RelationFilter.prototype, "contains", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'does_not_contain' }),
        __metadata("design:type", String)
    ], RelationFilter.prototype, "doesNotContain", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'is_empty' }),
        __metadata("design:type", Boolean)
    ], RelationFilter.prototype, "isEmpty", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'is_not_empty' }),
        __metadata("design:type", Boolean)
    ], RelationFilter.prototype, "isNotEmpty", void 0);
    return RelationFilter;
}());
//# sourceMappingURL=relation.js.map