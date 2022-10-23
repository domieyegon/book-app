import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Book } from '../../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  @Input() book: Book= {} as Book;

  isInCart: boolean= false;

  constructor(
    private cartService: CartService
  ) { }

  addToCart(): void {
    this.cartService.add(this.book);
    this.isInCart = true;
  }

  removeFromCart(): void {
    this.cartService.remove(this.book);
    this.isInCart= false;
  }

  ngOnInit(): void {
  }

}
