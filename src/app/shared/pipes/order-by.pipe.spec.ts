/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { OrderByPipe } from './order-by.pipe';

describe('Pipe: OrderBye', () => {
  it('create an instance', () => {
    const pipe = new OrderByPipe();
    expect(pipe).toBeTruthy();
  });

  it('sorts descending correctly', () => {
    //Arrange
    const pipe = new OrderByPipe();
    const products = [
      { id: 1, name: 'Lamp', price: 10, available: true },
      { id: 2, name: 'Sofa', price: 40, available: true },
      { id: 3, name: 'Chair', price: 10, available: true },
      { id: 4, name: 'Table', price: 80, available: false }];
    const parameters = ['name'];

    //Act
    const sortedProducts = pipe.transform(products, parameters, false);

    //Assert
    expect(sortedProducts[3].id).toBe(3);
    expect(sortedProducts[2].id).toBe(1);
    expect(sortedProducts[1].id).toBe(2);
    expect(sortedProducts[0].id).toBe(4);
  });

  it('sorts ascending correctly', () => {
    //Arrange
    const pipe = new OrderByPipe();
    const products = [
      { id: 1, name: 'Lamp', price: 10, available: true },
      { id: 2, name: 'Sofa', price: 40, available: true },
      { id: 3, name: 'Chair', price: 10, available: true },
      { id: 4, name: 'Table', price: 80, available: false }];
    const parameters = ['price'];

    //Act
    const sortedProducts = pipe.transform(products, parameters, true);

    //Assert
    expect(sortedProducts[0].id).toBe(1);
    expect(sortedProducts[1].id).toBe(3);
    expect(sortedProducts[2].id).toBe(2);
    expect(sortedProducts[3].id).toBe(4);
  });
});
