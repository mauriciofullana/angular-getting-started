import { Injectable } from '@angular/core';
import { Product } from '../products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private items: Product[] = [];

  constructor() {}

  getItems() {
    return this.items;
  }

  addToCart(item: Product) {
    this.items.push(item);
  }

  clearCart() {
    this.items = [];
  }
}
