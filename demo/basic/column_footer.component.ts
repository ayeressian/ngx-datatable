import { Component } from '@angular/core';

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

        <ngx-datatable-column name="Name">
          <ng-template let-column="column" ngx-datatable-column-footer-template>
            Holla! {{column.footer}}
          </ng-template>
        </ngx-datatable-column>

      </ngx-datatable>
    </div>
  `
})
export class ColumnFooterDemoComponent {

  rows = [];

  columns = [
    { prop: 'name' },
    { test: 'Gender' },
    { name: 'Company' }
  ];

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

}
