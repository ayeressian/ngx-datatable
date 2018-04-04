import {
  Component, Input, EventEmitter, Output, HostBinding,
  HostListener, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';

import { columnsByPin, columnGroupWidths, columnsByPinArr, translateXY } from '../../utils';
import { SortDirection, SortType, SelectionType, TableColumn } from '../../types';
import { nextSortDir } from '../../utils';
import { MouseEvent } from '../../events';

@Component({
  selector: 'datatable-column-footer-cell',
  template: `
      <div class="datatable-column-footer-cell-template-wrap">        
        <ng-template
          *ngIf="column.footerTemplate"
          [ngTemplateOutlet]="column.footerTemplate"
          [ngTemplateOutletContext]="cellContext">
        </ng-template>
      </div>
    `,
  host: {
    class: 'datatable-column-footer-cell'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DataTableColumnFooterCellComponent {

  private _column: TableColumn;
  private _rows: any[];

  cellContext: any = {
    column: this.column,
    rows: this.rows
  };

  constructor(private cd: ChangeDetectorRef) { }

  @Input() set rows(rows) {
    this._rows = rows;
    this.cellContext.rows = rows;
    this.cd.markForCheck();
  };

  get rows(): any[] {
    return this._rows;
  }

  @Input() set column(column: TableColumn) {
    this._column = column;
    this.cellContext.column = column;
    this.cd.markForCheck();
  }

  get column(): TableColumn {
    return this._column;
  }

  @HostBinding('style.minWidth.px')
  get minWidth(): number {
    return this.column.minWidth;
  }

  @HostBinding('style.maxWidth.px')
  get maxWidth(): number {
    return this.column.maxWidth;
  }

  @HostBinding('style.width.px')
  get width(): number {
    return this.column.width;
  }
}
