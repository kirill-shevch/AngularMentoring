/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProductPromiseService } from './product-promise.service';

describe('Service: ProductPromise', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductPromiseService]
    });
  });

  it('should ...', inject([ProductPromiseService], (service: ProductPromiseService) => {
    expect(service).toBeTruthy();
  }));
});
