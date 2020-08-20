import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryTableComponent } from '../components/inventory/inventory-table/inventory-table.component';

const routes: Routes = [
  { path: '', redirectTo: '/inventory', pathMatch: 'full' },
  { path: 'inventory', component: InventoryTableComponent },
  // { path: 'inventory', component: OrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
