import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './shared/header/header.component';
import { InventoryTableComponent } from './components/inventory/inventory-table/inventory-table.component';
import { AppRoutingModule } from '../app/shared/app-routing.module';
import { MaterialModule } from './shared/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './shared/side-nav/side-nav.component';
import { TvMatTableComponent } from '../app/shared/tv-mat-table/tv-mat-table.component';
import { ColumnSorterComponent } from '../app/shared/tv-mat-table/column-sorter/column-sorter.component';
import { InventoryAddComponent } from './components/inventory/inventory-add/inventory-add.component';
import { OrdersTableComponent } from './components/orders/orders-table/orders-table.component';
import { OrdersAddComponent } from './components/orders/orders-add/orders-add.component';
import { InventoryItemsModalComponent } from './components/inventory/inventory-items-modal/inventory-items-modal.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InventoryTableComponent, SideNavComponent, TvMatTableComponent, ColumnSorterComponent, InventoryAddComponent, OrdersTableComponent, OrdersAddComponent, InventoryItemsModalComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, MaterialModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
