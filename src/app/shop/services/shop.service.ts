import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Shop } from '../models/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  private shopUrl = 'http://localhost:3000/shops';

  constructor(private http: HttpClient) { }

  createShop(shop: Shop): Observable<Shop> {
    const url = this.shopUrl;
    const body = JSON.stringify(shop);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .post<Shop>(url, body, options);
  }

  getShops(): Observable<Shop[]> {
    const url = this.shopUrl;
    return this.http
      .get<Shop[]>(url);
  }

  getShop(id: number): Observable<Shop> {
    const url = `${this.shopUrl}/${id}`;
    return this.http
      .get<Shop>(url);
  }
}