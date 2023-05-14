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
exports.CheckboxFilter = void 0;
var class_transformer_1 = require("class-transformer");
var CheckboxFilter = exports.CheckboxFilter = /** @class */ (function () {
    function CheckboxFilter() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Boolean)
    ], CheckboxFilter.prototype, "equals", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'does_not_equal' }),
        __metadata("design:type", Boolean)
    ], CheckboxFilter.prototype, "doesNotEqual", void 0);
    return CheckboxFilter;
}());
