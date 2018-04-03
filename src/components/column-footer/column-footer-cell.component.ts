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
        hello
      </div>
    `,
  host: {
    class: 'datatable-column-footer-cell'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DataTableColumnFooterCellComponent {

  private _column: TableColumn;

  cellContext: any = {
    column: this.column
  };

  constructor(private cd: ChangeDetectorRef) { }

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
