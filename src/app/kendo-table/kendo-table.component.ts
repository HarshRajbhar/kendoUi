import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kendo-table',
  templateUrl: './kendo-table.component.html',
  styleUrls: ['./kendo-table.component.scss'],
})
export class KendoTableComponent {
  @Input() selectedItem!: string;
}
