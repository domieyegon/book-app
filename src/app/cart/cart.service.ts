import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Book[] = [];

  constructor() { }

  add(book: Book) {
    this.cart.push(book);
  }

  remove(book: Book) {
    const index = this.cart.findIndex(b  => b === book);

    this.cart.splice(index, 1);

    // this.cart = this.cart.filter(b=> b != book);
  }

  get() {
    return this.cart;
  }
}
