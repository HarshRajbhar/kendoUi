import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  CancelEvent,
  EditEvent,
  GridComponent,
  RemoveEvent,
  SaveEvent,
} from '@progress/kendo-angular-grid';
import { products } from 'src/assets/tableData';

interface MainGridItem {
  ID: number;
  Name: string;
  Description: string;
  SubGridData: SubGridItem[];
}

interface SubGridItem {
  SubID: number;
  SubName: string;
}

@Component({
  selector: 'app-kendo-grid2',
  templateUrl: './kendo-grid2.component.html',
  styleUrls: ['./kendo-grid2.component.scss'],
})
export class KendoGrid2Component {
  gridView: unknown[] = products;
  editedRowIndex: number;
  formGroup: FormGroup;

  mainGridData: MainGridItem[] = [
    {
      ID: 1,
      Name: 'Main Item 1',
      Description: 'Description 1',
      SubGridData: [
        { SubID: 1, SubName: 'Sub Item 1' },
        { SubID: 2, SubName: 'Sub Item 2' },
        { SubID: 3, SubName: 'Sub Item 3' },
        { SubID: 4, SubName: 'Sub Item 4' },
        { SubID: 5, SubName: 'Sub Item 5' },
      ],
    },
    {
      ID: 2,
      Name: 'Main Item 2',
      Description: 'Description 2',
      SubGridData: [
        { SubID: 6, SubName: 'Sub Item 6' },
        { SubID: 7, SubName: 'Sub Item 7' },
        { SubID: 8, SubName: 'Sub Item 8' },
        { SubID: 9, SubName: 'Sub Item 9' },
        { SubID: 10, SubName: 'Sub Item 10' },
      ],
    },
    {
      ID: 3,
      Name: 'Main Item 3',
      Description: 'Description 3',
      SubGridData: [
        { SubID: 11, SubName: 'Sub Item 11' },
        { SubID: 12, SubName: 'Sub Item 12' },
        { SubID: 13, SubName: 'Sub Item 13' },
        { SubID: 14, SubName: 'Sub Item 14' },
        { SubID: 15, SubName: 'Sub Item 15' },
      ],
    },
    {
      ID: 4,
      Name: 'Main Item 4',
      Description: 'Description 4',
      SubGridData: [
        { SubID: 26, SubName: 'Sub Item 26' },
        { SubID: 27, SubName: 'Sub Item 27' },
        { SubID: 28, SubName: 'Sub Item 28' },
        { SubID: 29, SubName: 'Sub Item 29' },
        { SubID: 30, SubName: 'Sub Item 30' },
      ],
    },
  ];

  changes() {
    this.mainGridData = [
      {
        ID: 1,
        Name: 'Main Item 1',
        Description: 'Description 1',
        SubGridData: [
          { SubID: 1, SubName: 'Harsh' },
          { SubID: 2, SubName: 'Kumar' },
          { SubID: 3, SubName: 'Rajbhar' },
          { SubID: 4, SubName: 'Sub Item 4' },
          { SubID: 5, SubName: 'Sub Item 5' },
        ],
      },
      {
        ID: 2,
        Name: 'Main Item 2',
        Description: 'Description 2',
        SubGridData: [
          { SubID: 6, SubName: 'Sub Item 6' },
          { SubID: 7, SubName: 'Sub Item 7' },
          { SubID: 8, SubName: 'Sub Item 8' },
          { SubID: 9, SubName: 'Sub Item 9' },
          { SubID: 10, SubName: 'Sub Item 10' },
        ],
      },
      {
        ID: 3,
        Name: 'Main Item 3',
        Description: 'Description 3',
        SubGridData: [
          { SubID: 11, SubName: 'Sub Item 11' },
          { SubID: 12, SubName: 'Sub Item 12' },
          { SubID: 13, SubName: 'Sub Item 13' },
          { SubID: 14, SubName: 'Sub Item 14' },
          { SubID: 15, SubName: 'Sub Item 15' },
        ],
      },
      {
        ID: 4,
        Name: 'Main Item 4',
        Description: 'Description 4',
        SubGridData: [
          { SubID: 26, SubName: 'Sub Item 26' },
          { SubID: 27, SubName: 'Sub Item 27' },
          { SubID: 28, SubName: 'Sub Item 28' },
          { SubID: 29, SubName: 'Sub Item 29' },
          { SubID: 30, SubName: 'Sub Item 30' },
        ],
      },
    ];
  }

  editHandler(args: EditEvent): void {
    //
    const form = new FormGroup({
      SubName: new FormControl(args.dataItem.SubName),
      // other fields
    });
    args.sender.editRow(args.rowIndex, form);
  }
  cancelHandler(args: CancelEvent): void {
    // close the editor for the given row
    this.closeEditor(args.sender, args.rowIndex);
  }
  saveHandler(args: SaveEvent): void {
    this.mainGridData.forEach((e) => {
      const ind = e.SubGridData.findIndex((e2) => {
        return args.dataItem.SubID === e2.SubID;
      });
      console.log(e.SubGridData[ind]);
      e.SubGridData[ind].SubName = args.formGroup.value.SubName;
      this.closeEditor(args.sender, args.rowIndex);
    });
  }

  closeEditor(grid: GridComponent, rowIndex = this.editedRowIndex) {
    // close the editor
    grid.closeRow(rowIndex);
    // reset the helpers
    this.editedRowIndex = undefined;
    this.formGroup = undefined;
  }
}
