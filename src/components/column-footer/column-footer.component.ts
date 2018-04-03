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
      <div>
        
      </div>
    `,
    host: {
      class: 'datatable-column-footer'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  export class DataTableColumnFooterComponent {
  
   
  }
  