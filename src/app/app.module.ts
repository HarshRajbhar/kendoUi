import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KendoTableComponent } from './kendo-table/kendo-table.component';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { KendoGridComponent } from './kendo-grid/kendo-grid.component';

@NgModule({
  declarations: [AppComponent, KendoTableComponent, KendoGridComponent],
  imports: [
    LayoutModule,
    ButtonsModule,  
    BrowserModule,
    AppRoutingModule,
    GridModule,
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
