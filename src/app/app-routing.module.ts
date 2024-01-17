import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from '@progress/kendo-angular-grid';
import { KendoTableComponent } from './kendo-table/kendo-table.component';

const routes: Routes = [
  // {
  //   path: 'table',
  //   component: KendoTableComponent,
  // },
  // {
  //   path: 'grid',
  //   component: GridComponent,
  // },
  // {
  //   path: '',
  //   redirectTo: 'table',
  //   pathMatch: 'full',
  // },
  // { path: '**', redirectTo: 'table' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
