/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CartPromiseService } from './cart-promise.service';

describe('Service: CartPromise', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartPromiseService]
    });
  });

  it('should ...', inject([CartPromiseService], (service: CartPromiseService) => {
    expect(service).toBeTruthy();
  }));
});
