import { Injectable } from '@angular/core';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Book[] = [];

  constructor() { }

  add(book:Book){
    this.cart.push(book);
  }

  get(){
    return this.cart;
  }
}
