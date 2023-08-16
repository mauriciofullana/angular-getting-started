import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Product } from '../products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  constructor(private http: HttpClient) { }

  getItems() {
    return this.items;
  }

  addToCart(item: Product) {
    this.items.push(item);
  }

  clearCart() {
    this.items = [];
  }

  getShippingPrices() {
    return this.http.get<{ type: string, price: number }[]>('../assets/shipping.json');
  }
}
