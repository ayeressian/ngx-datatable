import {
    Component, Input, EventEmitter, Output, HostBinding, 
    HostListener, ChangeDetectionStrategy, ChangeDetectorRef
  } from '@angular/core';
  import { SortDirection, SortType, SelectionType, TableColumn } from '../../types';
  import { nextSortDir } from '../../utils';
  import { MouseEvent } from '../../events';
  
  @Component({
    selector: 'datatable-column-footer-cell',
    template: `
      
    `,
    host: {
      class: 'datatable-column-footer-cell'
    },
    changeDetection: ChangeDetectionStrategy.OnPush
  })
  
  export class DataTableColumnFooterCellComponent {
  
    
  
  }
  