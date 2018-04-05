import { ChangeDetectorRef } from '@angular/core';
import { TableColumn } from '../../types';
export declare class DataTableColumnFooterCellComponent {
    private cd;
    private _column;
    private _rows;
    cellContext: any;
    constructor(cd: ChangeDetectorRef);
    rows: any[];
    column: TableColumn;
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly width: number;
}
