import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Book[]=[];

  constructor(
    private cartService:CartService
  ) { }

  ngOnInit(): void {
  }

  getCart(){
    return this.cartService.get();
  }

}
