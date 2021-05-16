import { Injectable } from '@angular/core';
import { genID } from './gen-id.generator';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  private generator = genID();

  generate(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let index = 0; index < length; index++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  getNewId(): number {
    return this.generator.next().value;
  }
}
