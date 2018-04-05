import { ChangeDetectorRef } from '@angular/core';
export declare class DataTableColumnFooterComponent {
    private cd;
    _columnsByPin: any;
    _columnGroupWidths: any;
    _innerWidth: number;
    _styleByGroup: {
        left: {};
        center: {};
        right: {};
    };
    _columns: any[];
    _offsetX: number;
    _rows: any[];
    constructor(cd: ChangeDetectorRef);
    columns: any[];
    rows: any[];
    innerWidth: number;
    offsetX: number;
    setStylesByGroup(): void;
    calcStylesByGroup(group: string): any;
    trackByGroups(index: number, colGroup: any): any;
    columnTrackingFn(index: number, column: any): any;
}
