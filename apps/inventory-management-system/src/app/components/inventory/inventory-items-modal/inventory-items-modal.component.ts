import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InventoryService } from '../../../services/inventory/inventory.service';
import { InventoryItem } from '../../../interfaces/inventory.model';

@Component({
  selector: 'travel-vision-ims-inventory-items-modal',
  templateUrl: './inventory-items-modal.component.html',
  styleUrls: ['./inventory-items-modal.component.less']
})
export class InventoryItemsModalComponent implements OnInit {
  datasource = new MatTableDataSource<InventoryItem>();
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns = {

  }

  rowData: InventoryItem[];
  public columnDefs;

  constructor(@Inject(MAT_DIALOG_DATA) data, private service: InventoryService) {
     this.rowData = data;
     this.datasource.data = this.rowData;
   }

  ngOnInit(): void {
    this.datasource.paginator = this.paginator;
    this.datasource.sort = this.sort;
  }

}
