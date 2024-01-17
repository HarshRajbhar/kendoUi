import { Component } from '@angular/core';
import { TablesampleProducts } from 'src/assets/tableData';

interface ColumnSetting {
  field: string;
  title: string;
  format?: string;
  type: 'text' | 'numeric' | 'boolean' | 'date';
  width?: any;
}
interface Product {
  ProductID: number;
  ProductName: string;
  Discontinued?: boolean;
  UnitsInStock?: number;
  UnitPrice: number;
  Category: {
    CategoryID: number;
    CategoryName: string;
  };
}

@Component({
  selector: 'app-kendo-table',
  templateUrl: './kendo-table.component.html',
  styleUrls: ['./kendo-table.component.scss'],
})
export class KendoTableComponent {
  gridData: Product[] = TablesampleProducts;
}
