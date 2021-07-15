import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct number of elements', () => {
    //Act
    const products = service.getProducts();

    //Assert
    expect(products.subscribe(x => x.length == 4));
  })
});
