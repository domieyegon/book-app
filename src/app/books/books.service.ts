import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [
      {
        name: " Clean Code",
        author: "Robert C. Martin",
        imageUrl: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
        amount: 4499
      },
      {
        name: " Introduction to Algorithms",
        author: "Thomas H. Cormen",
        imageUrl: "https://m.media-amazon.com/images/I/41SNoh5ZhOL._SX258_BO1,204,203,200_.jpg",
        amount: 2849
      },
      {
        name: " Designing Data-Intensive Applications",
        author: "Martin Kleppmann ",
        imageUrl: "https://m.media-amazon.com/images/I/51ZSpMl1-LL._SX258_BO1,204,203,200_.jpg",
        amount: 2337
      },
      {
        name: " Structure and Interpretation of Computer Programs (SICP)",
        author: "Harold Abelson",
        imageUrl: "https://m.media-amazon.com/images/I/4186AAibrkL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
        amount: 5034
      },
      {
        name: "Clean Architecture Design Patterns: Elements of Reusable Object-Oriented Software",
        author: "Erich Gamma",
        imageUrl: "https://hackr.io/blog/media/design-pattern.jpg",
        amount: 2849
      },
      {
        name: "The Pragmatic Programmer",
        author: " Andrew Hunt",
        imageUrl: "https://m.media-amazon.com/images/I/51W1sBPO7tL._SX258_BO1,204,203,200_.jpg",
        amount: 3025
      },
      {
        name: "Cracking the Coding Interview",
        author: "Gayle Laakmann McDowell",
        imageUrl: "https://m.media-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg",
        amount: 3595
      },
    ];
  }
}
