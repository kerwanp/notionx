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
exports.DateFilter = void 0;
var class_transformer_1 = require("class-transformer");
var DateFilter = exports.DateFilter = /** @class */ (function () {
    function DateFilter() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", String)
    ], DateFilter.prototype, "after", void 0);
    __decorate([
        (0, class_transformer_1.Expose)(),
        (0, class_transformer_1.Type)(function () { return Date; }),
        __metadata("design:type", String)
    ], DateFilter.prototype, "before", void 0);
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], DateFilter.prototype, "equals", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'is_empty' }),
        __metadata("design:type", Boolean)
    ], DateFilter.prototype, "isEmpty", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'is_not_empty' }),
        __metadata("design:type", Boolean)
    ], DateFilter.prototype, "isNotEmpty", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'next_month' }),
        (0, class_transformer_1.Transform)(function () { return ({}); }, { toPlainOnly: true }),
        __metadata("design:type", Boolean)
    ], DateFilter.prototype, "nextMonth", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'next_week' }),
        (0, class_transformer_1.Transform)(function () { return ({}); }, { toPlainOnly: true }),
        __metadata("design:type", Boolean)
    ], DateFilter.prototype, "nextWeek", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'next_year' }),
        (0, class_transformer_1.Transform)(function () { return ({}); }, { toPlainOnly: true }),
        __metadata("design:type", Boolean)
    ], DateFilter.prototype, "nextYear", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'on_or_after' }),
        __metadata("design:type", String)
    ], DateFilter.prototype, "onOrAfter", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'past_month' }),
        (0, class_transformer_1.Transform)(function () { return ({}); }, { toPlainOnly: true }),
        __metadata("design:type", Boolean)
    ], DateFilter.prototype, "pastMonth", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'past_week' }),
        (0, class_transformer_1.Transform)(function () { return ({}); }, { toPlainOnly: true }),
        __metadata("design:type", Boolean)
    ], DateFilter.prototype, "pastWeek", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'past_year' }),
        (0, class_transformer_1.Transform)(function () { return ({}); }, { toPlainOnly: true }),
        __metadata("design:type", Boolean)
    ], DateFilter.prototype, "pastYear", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'this_week' }),
        (0, class_transformer_1.Transform)(function () { return ({}); }, { toPlainOnly: true }),
        __metadata("design:type", Boolean)
    ], DateFilter.prototype, "thisWeek", void 0);
    return DateFilter;
}());
//# sourceMappingURL=date.js.map