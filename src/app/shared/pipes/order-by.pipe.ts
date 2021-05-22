import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {

  transform(value: any, parameters: string[] = [], sortByAscending: boolean = true): any {
    const valueArray = <Array<any>>value;
    if (!value || !valueArray || parameters.length === 0) {
      return value;
    }
    valueArray.sort((a, b) => this.compare(a, b, 0, parameters, sortByAscending));
    return valueArray;
  }

  private compare(a: any, b: any, i: number, parameters: string[], sortByAscending: boolean): number {
    if (a[parameters[i]] < b[parameters[i]]) {
      return sortByAscending ? -1 : 1;
    }
    if (a[parameters[i]] > b[parameters[i]]) {
      return sortByAscending ? 1 : -1;
    }
    if (i < parameters.length - 1) {
      i++;
      return this.compare(a, b, i, parameters, sortByAscending);
    }
    return 0;
  }
}


