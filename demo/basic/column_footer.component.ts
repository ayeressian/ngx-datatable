import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'column-footer-demo',
  template: `
    <div>
      <h3>
        Custom Footer
        <small>
          <a href="https://github.com/swimlane/ngx-datatable/blob/master/demo/basic/footer.component.ts" target="_blank">
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columns]="columns"
        [columnMode]="'force'"        
        [headerHeight]="50"
        [rowHeight]="'auto'">

        <!--<ngx-datatable-column name="Name">
          <ng-template let-column="column" ngx-datatable-column-footer-template>
            Holla! 1
          </ng-template>
        </ngx-datatable-column>

        <ngx-datatable-column name="Company">
        </ngx-datatable-column>-->

      </ngx-datatable>

      <ng-template #companyColumnFooterTemplate let-column="column" let-rows="rows">
        <strong>Column width</strong>: {{column.width}}
        <p *ngIf="rows">{{rows.length}}</p>        
      </ng-template>

      <ng-template #companyColumnFooterTemplate let-column="column" let-rows="rows">
        <strong>Column width</strong>: {{column.width}}
        <p *ngIf="rows">{{rows.length}}</p>        
      </ng-template>

    </div>
  `
})
export class ColumnFooterDemoComponent {

  @ViewChild('companyColumnFooterTemplate') companyColumnFooterTemplate: TemplateRef<any>;

  rows = [];

  columns;

  constructor() {
    this.fetch((data) => {
      this.rows = data.splice(0, 5);
    });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  ngOnInit() {
    this.columns = [
      { name: 'Name'},
      { name: 'Gender', footerTemplate: this.companyColumnFooterTemplate, test: 'test'},
      { name: 'Company', footerTemplate: this.companyColumnFooterTemplate, test: 'test'}];
  }

}
