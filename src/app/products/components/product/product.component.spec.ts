/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductComponent } from './product.component';
import { Router } from '@angular/router';
import { RouterStub } from 'src/app/testing-helpers/router-stub';
import { CartService } from 'src/app/cart/services/cart.service';

describe('ProductComponent', () => {
    let mockHttp: HttpTestingController;
    let router: Router;
    let component: ProductComponent;
    let fixture: ComponentFixture<ProductComponent>;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            declarations: [ProductComponent],
            imports: [HttpClientTestingModule],
            providers: [{ provide: Router, useClass: RouterStub }]
        })
            .compileComponents();

        mockHttp = TestBed.inject(HttpTestingController);
        router = TestBed.inject(Router);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('on buy', () => {
        // Arrange
        spyOn(component, 'onBuy');

        // Act
        component.onBuy();

        // Assert
        expect(component.onBuy).toHaveBeenCalled();
    });
});
