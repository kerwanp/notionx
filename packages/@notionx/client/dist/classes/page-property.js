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
exports.PageProperty = void 0;
var class_transformer_1 = require("class-transformer");
var PageProperty = exports.PageProperty = /** @class */ (function () {
    function PageProperty() {
    }
    Object.defineProperty(PageProperty.prototype, "value", {
        /**
         * The property value.
         */
        get: function () {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return this[this.type];
        },
        enumerable: false,
        configurable: true
    });
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], PageProperty.prototype, "id", void 0);
    __decorate([
        (0, class_transformer_1.Expose)(),
        __metadata("design:type", String)
    ], PageProperty.prototype, "type", void 0);
    return PageProperty;
}());
//# sourceMappingURL=page-property.js.map