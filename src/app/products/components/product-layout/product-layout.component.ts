import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartPromiseService } from 'src/app/cart/services/cart-promise.service';
import { Product } from '../../models/product';
import { ProductPromiseService } from '../../services/product-promise.service';

@Component({
  selector: 'app-product-layout',
  templateUrl: './product-layout.component.html',
  styleUrls: ['./product-layout.component.css']
})
export class ProductLayoutComponent implements OnInit {

  product!: Product | undefined;
  private sub: any;

  constructor(private route: ActivatedRoute,
              private productService: ProductPromiseService,
              private router: Router,
              private cartService: CartPromiseService) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const products = this.productService.getProducts();
      products.then((items: Product[]) => this.product = items.find(p => p.name === params.productName));
    });
  }

  onBack(): void {
    const link = ['./../../'];
    this.router.navigate(link);
  }

  onBuy(): void {
    if (this.product) {
      this.cartService.addProduct(this.product.id, this.product.name, this.product.price);
    }
    this.onBack();
  }
}
