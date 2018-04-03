import { Directive, TemplateRef } from '@angular/core';

@Directive({ selector: '[ngx-datatable-column-footer-template]' })
export class DataTableColumnFooterDirective {
  constructor(public template: TemplateRef<any>) { }
}
