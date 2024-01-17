import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KendoTableComponent } from './kendo-table/kendo-table.component';

const routes: Routes = [
  {
    path: 'table',
    component: KendoTableComponent,
  },
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'table' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
