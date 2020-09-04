import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../../services/inventory/inventory.service';
import { MatTableDataSource } from '@angular/material/table';
import { Inventory, InventoryItem, Warehouse, Supplier } from '../../../interfaces/inventory.model';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'travel-vision-ims-inventory-add',
  templateUrl: './inventory-add.component.html',
  styleUrls: ['./inventory-add.component.less']
})
export class InventoryAddComponent implements OnInit {
  suppliers: String[] = ['Apex', 'TEK'];
  warehouses: String[] = ['Ware1', 'Ware2'];
  itemList: InventoryItem[] = [];
  dataSource = new MatTableDataSource<InventoryItem>();

  inventoryForm = new FormGroup({
    itemNameControl: new FormControl(),
    quantityControl: new FormControl(),
    supplierControl: new FormControl(),
    costControl: new FormControl(),
    warehouseControl: new FormControl(),
    typeControl: new FormControl(),
  });

  get itemName() {
    return this.inventoryForm.get('itemNameControl').value;
  }

  get quantity() {
    return this.inventoryForm.get('quantityControl').value;
  }

  get supplier() {
    return this.inventoryForm.get('supplierControl').value;
  }

  get cost() {
    return this.inventoryForm.get('costControl').value;
  }

  get warehouse() {
    return this.inventoryForm.get('warehouseControl').value;
  }

  get type() {
    return this.inventoryForm.get('typeControl').value;
  }

  constructor(private service: InventoryService) { }


  displayedColumns: string[] = [
    'id',
    'itemName',
    'quantity',
    'type',
    'warehouse',
    'supplier',
    'cost'
  ]

  ngOnInit(): void {

  }

  addItems() {
    const id = 0;
    const newItem: InventoryItem = { 
      id: id, 
      itemName: this.itemName,
      quantity: this.quantity,
      supplier: this.supplier,
      cost: this.cost,
      warehouse: this.warehouse,
      type: this.type 
    };

    console.log("Item: " + newItem.cost);
    this.itemList.push(newItem);
    this.dataSource = new MatTableDataSource(this.itemList);
  }

  saveInventory() {

  }

  populateWarehouses() {

  }

  populateSuppliers() {

  }

}
