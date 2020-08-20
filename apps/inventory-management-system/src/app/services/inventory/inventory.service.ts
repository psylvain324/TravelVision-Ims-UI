import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ServiceResponse } from '../../interfaces/service-response.model';
import { Inventory, Warehouse } from '../../interfaces/inventory.model';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }
  apiBaseUrl = environment.apiUrl;

  getAllInventory() {
    const apiUrl = this.apiBaseUrl + '/inventory';
    return this.http.get(apiUrl).pipe(
      map((data: ServiceResponse<Inventory[]>) => {
        return data.data;
      }),
      catchError(() => {
        return throwError('There was a problem with the request');
      })
    );
  }

  getInventoryById(id: number) {
    const apiUrl = this.apiBaseUrl + '/inventory' + id.toString();
    return this.http.get(apiUrl).pipe(
      map((data: ServiceResponse<Inventory[]>) => {
        return data.data;
      }),
      catchError(() => {
        return throwError('There was a problem with the request');
      })
    );
  }

  getAllWarehouses() {
    const apiUrl = this.apiBaseUrl + '/warehouse';
    return this.http.get(apiUrl).pipe(
      map((data: ServiceResponse<Warehouse[]>) => {
        return data.data;
      }),
      catchError(() => {
        return throwError('There was a problem with the request');
      })
    );
  }

}
