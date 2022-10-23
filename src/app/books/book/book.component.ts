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

  constructor(
    private cartService: CartService
  ) { }

  addToCart(): void {
    this.cartService.add(this.book);
  }

  ngOnInit(): void {
  }

}
