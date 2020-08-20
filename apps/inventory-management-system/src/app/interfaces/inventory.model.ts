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
  name: string;
  quantity: number;
  type: string;
  warehouse: string;
  cost: number;
  onOrder: number;
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

