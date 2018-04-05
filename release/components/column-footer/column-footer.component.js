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
var utils_1 = require("../../utils");
var DataTableColumnFooterComponent = /** @class */ (function () {
    function DataTableColumnFooterComponent(cd) {
        this.cd = cd;
        this._styleByGroup = {
            left: {},
            center: {},
            right: {}
        };
    }
    Object.defineProperty(DataTableColumnFooterComponent.prototype, "columns", {
        set: function (val) {
            this._columns = val;
            var colsByPin = utils_1.columnsByPin(val);
            this._columnsByPin = utils_1.columnsByPinArr(val);
            this._columnGroupWidths = utils_1.columnGroupWidths(colsByPin, val);
            this.setStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableColumnFooterComponent.prototype, "rows", {
        get: function () {
            return this._rows;
        },
        set: function (rows) {
            this._rows = rows;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(DataTableColumnFooterComponent.prototype, "innerWidth", {
        get: function () {
            return this._innerWidth;
        },
        set: function (val) {
            this._innerWidth = val;
            if (this._columns) {
                var colByPin = utils_1.columnsByPin(this._columns);
                this._columnGroupWidths = utils_1.columnGroupWidths(colByPin, this._columns);
                this.setStylesByGroup();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableColumnFooterComponent.prototype, "offsetX", {
        get: function () { return this._offsetX; },
        set: function (val) {
            this._offsetX = val;
            this.setStylesByGroup();
        },
        enumerable: true,
        configurable: true
    });
    DataTableColumnFooterComponent.prototype.setStylesByGroup = function () {
        this._styleByGroup['left'] = this.calcStylesByGroup('left');
        this._styleByGroup['center'] = this.calcStylesByGroup('center');
        this._styleByGroup['right'] = this.calcStylesByGroup('right');
        this.cd.detectChanges();
    };
    DataTableColumnFooterComponent.prototype.calcStylesByGroup = function (group) {
        var widths = this._columnGroupWidths;
        var offsetX = this.offsetX;
        var styles = {
            width: widths[group] + "px"
        };
        if (group === 'center') {
            utils_1.translateXY(styles, offsetX * -1, 0);
        }
        else if (group === 'right') {
            var totalDiff = widths.total - this.innerWidth;
            var offset = totalDiff * -1;
            utils_1.translateXY(styles, offset, 0);
        }
        return styles;
    };
    DataTableColumnFooterComponent.prototype.trackByGroups = function (index, colGroup) {
        return colGroup.type;
    };
    DataTableColumnFooterComponent.prototype.columnTrackingFn = function (index, column) {
        return column.$$id;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataTableColumnFooterComponent.prototype, "columns", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableColumnFooterComponent.prototype, "rows", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableColumnFooterComponent.prototype, "innerWidth", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableColumnFooterComponent.prototype, "offsetX", null);
    DataTableColumnFooterComponent = __decorate([
        core_1.Component({
            selector: 'datatable-column-footer',
            template: "\n    <div      \n      [style.width.px]=\"_columnGroupWidths.total\"\n      class=\"datatable-column-footer-inner\">\n      <div\n        *ngFor=\"let colGroup of _columnsByPin; trackBy: trackByGroups\"\n        [class]=\"'datatable-row-' + colGroup.type\"\n        [ngStyle]=\"_styleByGroup[colGroup.type]\">\n        <ng-container *ngFor=\"let column of colGroup.columns; trackBy: columnTrackingFn\">\n          <datatable-column-footer-cell\n            *ngIf=\"column.footerTemplate\"\n            [column]=\"column\"\n            [rows]=\"rows\"></datatable-column-footer-cell>\n        </ng-container>        \n      </div>\n    </div>      \n    ",
            host: {
                class: 'datatable-column-footer'
            },
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [core_1.ChangeDetectorRef])
    ], DataTableColumnFooterComponent);
    return DataTableColumnFooterComponent;
}());
exports.DataTableColumnFooterComponent = DataTableColumnFooterComponent;
//# sourceMappingURL=column-footer.component.js.map