import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';
import { KendoInputsComponent } from './kendo-inputs/kendo-inputs.component';
import { KendoTableComponent } from './kendo-table/kendo-table.component';
import { KendoBtnComponent } from './kendo-btn/kendo-btn.component';
import { KendoGrid2Component } from './kendo-grid2/kendo-grid2.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';

@NgModule({
  declarations: [
    AppComponent,
    KendoTableComponent,
    KendoGridComponent,
    KendoInputsComponent,
    KendoBtnComponent,
    KendoGrid2Component,
  ],
  imports: [
    LayoutModule,
    ButtonsModule,
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    InputsModule,
    LabelModule,
    ReactiveFormsModule,
    DropDownsModule,
    LabelModule,
    FormsModule,
    ButtonsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
