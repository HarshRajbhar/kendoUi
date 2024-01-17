import { Component } from '@angular/core';
import { SVGIcon, cartIcon } from '@progress/kendo-svg-icons';
import { GridsampleProducts } from 'src/assets/tableData';

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
  selector: 'app-kendo-grid',
  templateUrl: './kendo-grid.component.html',
  styleUrls: ['./kendo-grid.component.scss'],
})
export class KendoGridComponent {
  public gridData: Product[] = GridsampleProducts;
}
