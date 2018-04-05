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
var core_1 = require("@angular/core");
var DataTableColumnFooterCellComponent = /** @class */ (function () {
    function DataTableColumnFooterCellComponent(cd) {
        this.cd = cd;
        this.cellContext = {
            column: this.column,
            rows: this.rows
        };
    }
    Object.defineProperty(DataTableColumnFooterCellComponent.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        set: function (rows) {
            this._rows = rows;
            this.cellContext.rows = rows;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DataTableColumnFooterCellComponent.prototype, "column", {
        get: function () {
            return this._column;
        },
        set: function (column) {
            this._column = column;
            this.cellContext.column = column;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableColumnFooterCellComponent.prototype, "minWidth", {
        get: function () {
            return this.column.minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableColumnFooterCellComponent.prototype, "maxWidth", {
        get: function () {
            return this.column.maxWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableColumnFooterCellComponent.prototype, "width", {
        get: function () {
            return this.column.width;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableColumnFooterCellComponent.prototype, "rows", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableColumnFooterCellComponent.prototype, "column", null);
    __decorate([
        core_1.HostBinding('style.minWidth.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableColumnFooterCellComponent.prototype, "minWidth", null);
    __decorate([
        core_1.HostBinding('style.maxWidth.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableColumnFooterCellComponent.prototype, "maxWidth", null);
    __decorate([
        core_1.HostBinding('style.width.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableColumnFooterCellComponent.prototype, "width", null);
    DataTableColumnFooterCellComponent = __decorate([
        core_1.Component({
            selector: 'datatable-column-footer-cell',
            template: "\n      <div class=\"datatable-column-footer-cell-template-wrap\">        \n        <ng-template\n          *ngIf=\"column.footerTemplate\"\n          [ngTemplateOutlet]=\"column.footerTemplate\"\n          [ngTemplateOutletContext]=\"cellContext\">\n        </ng-template>\n      </div>\n    ",
            host: {
                class: 'datatable-column-footer-cell'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], DataTableColumnFooterCellComponent);
    return DataTableColumnFooterCellComponent;
}());
exports.DataTableColumnFooterCellComponent = DataTableColumnFooterCellComponent;
//# sourceMappingURL=column-footer-cell.component.js.map