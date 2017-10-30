var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Directive, Inject, Input, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
var OffClickDirective = /** @class */ (function () {
    /* tslint:enable */
    function OffClickDirective(platformId) {
        this.platformId = platformId;
    }
    OffClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (isPlatformBrowser(this.platformId)) {
            setTimeout(function () { document.addEventListener('click', _this.offClickHandler); }, 0);
        }
    };
    OffClickDirective.prototype.ngOnDestroy = function () {
        if (isPlatformBrowser(this.platformId)) {
            document.removeEventListener('click', this.offClickHandler);
        }
    };
    __decorate([
        Input('off-click'),
        __metadata("design:type", Object)
    ], OffClickDirective.prototype, "offClickHandler", void 0);
    OffClickDirective = __decorate([
        Directive({
            selector: '[off-click]'
        }),
        __param(0, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [String])
    ], OffClickDirective);
    return OffClickDirective;
}());
export { OffClickDirective };
//# sourceMappingURL=off-click.directive.js.map