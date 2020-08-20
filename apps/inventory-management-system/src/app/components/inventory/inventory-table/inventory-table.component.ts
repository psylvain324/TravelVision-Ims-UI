import { Component, OnInit, ViewChild } from '@angular/core';
import { Inventory, WarehouseResponse } from '../../../interfaces/inventory.model';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormControl, FormGroup } from '@angular/forms';
import { InventoryService } from '../../../services/inventory/inventory.service';
import { InventoryAddComponent } from '../inventory-add/inventory-add.component';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

const inventoryData: Inventory[] = [
  {id: 1, name: 'Beef Patties', quantity: 10, type: 'Food', totalOnOrder: 0, totalValue:500},
  {id: 2, name: 'Soup Spoons', quantity: 15, type: 'Silverware', totalOnOrder: 10, totalValue:250},
  {id: 3, name: 'Dining Room Chairs', quantity: 25, type: 'Furniture', totalOnOrder: 5, totalValue:1500},
];

@Component({
  selector: 'travel-vision-ims-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.less']
})
export class InventoryTableComponent implements OnInit {
  types: String[] = [];
  dataSource = new MatTableDataSource<Inventory>();
  rowData: Inventory[];

  @ViewChild(MatSort, {static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true}) paginator: MatPaginator;

  filterForm = new FormGroup({
    searchAheadControl: new FormControl()
  });

  get searchAhead() {
    return this.filterForm.get('searchAheadControl').value;
  }

  public warehousesResponse: WarehouseResponse;
  public warehouseList: string[] = [];
  public searchAheadArray: string[] = [];
  public postFilterSearchOptions: string[] = [];
  filteredSearchOptions$: Observable<string[]>;
  filteredInventory: any[] = [];
  isLoading = false;

  constructor(private service: InventoryService, private dialog: MatDialog) { }

  displayedColumns: string[] = [
    'id',
    'name',
    'quantity',
    'type',
    'totalOnOrder',
    'totalValue'
  ]

  displayedColumnNames: string[] = [
    'Id',
    'Name',
    'Quantity',
    'Type',
    'Total On Order',
    'Total Value'
  ]

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(inventoryData);
    this.dataSource.sort = this.sort;
    this.populateTypes();
  }

  populateTypes() {
    inventoryData.forEach((item, index) => {
      if (inventoryData.indexOf(item) === index) {
        this.types.push(item.type);
      }
    })
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  populateFilters() {
    this.filteredSearchOptions$ = this.filterForm
      .get('searchAheadControl')
      .valueChanges.pipe(
        startWith(''),
        map((value) => this.searchAheadFilter(value))
      );
  }

  searchAheadFilter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const sortedArray = this.searchAheadArray.sort();
    return sortedArray.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    )
  }

  getFilteredSearchLists() {
    this.searchAheadArray = [];
    this.postFilterSearchOptions = [];

    this.filteredInventory.filter((array) => {
      return this.filteredInventory;
    })

    this.postFilterSearchOptions = this.postFilterSearchOptions.filter(
      (element, i) => i === this.postFilterSearchOptions.indexOf(element)
    );

    this.searchAheadArray = this.postFilterSearchOptions;
  }

  openAddDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = '';
    this.dialog.open(InventoryAddComponent, dialogConfig);
  }

  getWareHouseList() {
    this.service.getAllWarehouses().subscribe((data:any) => {
      for (let i = 0; data.length > i; i++) {
        this.warehousesResponse = data[i].name;
        this.warehouseList.push(this.warehousesResponse.data.toString());
      }
    })
  }

}
