import { Component, Input } from '@angular/core';
import { Shop } from '../../models/shop';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  @Input()
  shop!: Shop;
}
