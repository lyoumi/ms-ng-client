import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books = []

  constructor() { }

  ngOnInit(): void {
  }

  saveBook(event: Event) {
    console.log(event)
  }
}
