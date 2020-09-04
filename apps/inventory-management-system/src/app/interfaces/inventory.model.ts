export interface Inventory {
  id: number;
  name: string;
  quantity: number;
  type: string;
  totalValue: number;
  totalOnOrder: number;
}

export interface InventoryItem{
  id: number;
  itemName: string;
  quantity: number;
  type: string;
  warehouse: string;
  supplier: string
  cost: number;
}

export interface Order {
  id: number;
  items: InventoryItem[];
  status: string;
  isFulfilled: boolean;
}

export interface Warehouse {
  id: number;
  name: string;
  location: string;
}

export interface Supplier {
  id: number;
  name: string;
  type: string;
}

export interface InventoryResponse {
  httpStatusMessage: string;
  data: Inventory[];
}

export interface InventoryItemResponse {
  httpStatusMessage: string;
  data: InventoryItem[];
}

export interface OrderResponse {
  httpStatusMessage: string;
  data: Order[];
}

export interface WarehouseResponse {
  httpStatusMessage: string;
  data: Warehouse[];
}

export interface SupplierResponse {
  httpStatusMessage: string;
  data: Supplier[];
}


