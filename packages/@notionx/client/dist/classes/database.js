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
exports.Database = void 0;
var class_transformer_1 = require("class-transformer");
var Database = exports.Database = /** @class */ (function () {
    function Database() {
    }
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], Database.prototype, "id", void 0);
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], Database.prototype, "url", void 0);
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Object)
    ], Database.prototype, "parent", void 0);
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Object)
    ], Database.prototype, "title", void 0);
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Object)
    ], Database.prototype, "description", void 0);
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Object)
    ], Database.prototype, "icon", void 0);
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Object)
    ], Database.prototype, "cover", void 0);
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", Boolean)
    ], Database.prototype, "archived", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'is_inline' }),
        __metadata("design:type", Boolean)
    ], Database.prototype, "isInline", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'last_edited_by' }),
        __metadata("design:type", Object)
    ], Database.prototype, "lastEditedBy", void 0);
    __decorate([
        (0, class_transformer_1.Type)(function () { return Date; }),
        (0, class_transformer_1.Expose)({ name: 'last_edited_time' }),
        __metadata("design:type", Date)
    ], Database.prototype, "lastEditedTime", void 0);
    __decorate([
        (0, class_transformer_1.Expose)({ name: 'created_by' }),
        __metadata("design:type", Object)
    ], Database.prototype, "createdBy", void 0);
    __decorate([
        (0, class_transformer_1.Type)(function () { return Date; }),
        (0, class_transformer_1.Expose)({ name: 'created_time' }),
        __metadata("design:type", Date)
    ], Database.prototype, "createdTime", void 0);
    return Database;
}());
//# sourceMappingURL=database.js.map