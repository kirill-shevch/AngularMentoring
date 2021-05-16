import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  getAppAuthor(): string {
    return 'Kirill Shevchenko';
  }
}

export const constantsService = new ConstantsService();
