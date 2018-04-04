import {
  Component, Output, EventEmitter, Input, HostBinding, ChangeDetectorRef, ChangeDetectionStrategy
} from '@angular/core';
import { SortType, SelectionType } from '../../types';
import { columnsByPin, columnGroupWidths, columnsByPinArr, translateXY } from '../../utils';
import { DataTableColumnDirective } from '../columns';
import { MouseEvent } from '../../events';

@Component({
  selector: 'datatable-column-footer',
  template: `
    <div      
      [style.width.px]="_columnGroupWidths.total"
      class="datatable-column-footer-inner">
      <div
        *ngFor="let colGroup of _columnsByPin; trackBy: trackByGroups"
        [class]="'datatable-row-' + colGroup.type"
        [ngStyle]="_styleByGroup[colGroup.type]">
        <ng-container *ngFor="let column of colGroup.columns; trackBy: columnTrackingFn">
          <datatable-column-footer-cell
            *ngIf="column.footerTemplate"
            [column]="column"
            [rows]="rows"></datatable-column-footer-cell>
        </ng-container>        
      </div>
    </div>      
    `,
  host: {
    class: 'datatable-column-footer'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableColumnFooterComponent {
  _columnsByPin: any;
  _columnGroupWidths: any;
  _innerWidth: number;
  _styleByGroup = {
    left: {},
    center: {},
    right: {}
  };
  _columns: any[];
  _offsetX: number;
  _rows: any[];

  constructor(private cd: ChangeDetectorRef) { }

  @Input() set columns(val: any[]) {
    this._columns = val;

    const colsByPin = columnsByPin(val);
    this._columnsByPin = columnsByPinArr(val);
    this._columnGroupWidths = columnGroupWidths(colsByPin, val);
    this.setStylesByGroup();
  }

  @Input() set rows(rows) {
    this._rows = rows;
  };  
  get rows() {
    return this._rows;
  }

  @Input() set innerWidth(val: number) {
    this._innerWidth = val;

    if (this._columns) {
      const colByPin = columnsByPin(this._columns);
      this._columnGroupWidths = columnGroupWidths(colByPin, this._columns);
      this.setStylesByGroup();
    }
  }

  @Input()
  set offsetX(val: number) {
    this._offsetX = val;
    this.setStylesByGroup();
  }
  get offsetX() { return this._offsetX; }

  get innerWidth(): number {
    return this._innerWidth;
  }

  setStylesByGroup() {
    this._styleByGroup['left'] = this.calcStylesByGroup('left');
    this._styleByGroup['center'] = this.calcStylesByGroup('center');
    this._styleByGroup['right'] = this.calcStylesByGroup('right');
    this.cd.detectChanges();
  }

  calcStylesByGroup(group: string): any {
    const widths = this._columnGroupWidths;
    const offsetX = this.offsetX;

    const styles = {
      width: `${widths[group]}px`
    };

    if (group === 'center') {
      translateXY(styles, offsetX * -1, 0);
    } else if (group === 'right') {
      const totalDiff = widths.total - this.innerWidth;
      const offset = totalDiff * -1;
      translateXY(styles, offset, 0);
    }

    return styles;
  }

  trackByGroups(index: number, colGroup: any): any {
    return colGroup.type;
  }

  columnTrackingFn(index: number, column: any): any {
    return column.$$id;
  }
}
