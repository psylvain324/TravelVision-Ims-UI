import { Injectable } from '@angular/core';
import { FilterOptions } from '../../interfaces/filter-options.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  transformMultipleFilters(items: any[], filterOptionsList: FilterOptions[]) {
    let filteredArray = items;
    if (!filteredArray) {
      return [];
    }
    for (const option of filterOptionsList) {
      if (option.searchText != null && option.fieldName != null) {
        filteredArray = filteredArray.filter((item) => {
          if (item[option.fieldName] && item[option.fieldName]
              .toLowerCase()
              .includes(option.searchText.toLowerCase())
          ) {
            return item;
          }
        })
      }
    }
  }

  sortedStringFilter(value: string, arrayToFilter: string[]): string[] {
    const filterValue = value.toLowerCase();
    let sortedArray = arrayToFilter.sort();
    sortedArray = sortedArray.filter((option) => {
      option.toLowerCase().indexOf(filterValue) === 0;
    });
    return sortedArray = sortedArray.filter((option) => {
      option.toLowerCase().indexOf(filterValue) === 0;
    });
  }

  populateFilter() {

  }

}
