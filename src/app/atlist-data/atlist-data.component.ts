import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ItemsInterface } from '../model/item';


@Component({
  selector: 'app-atlist-data',
  templateUrl: './atlist-data.component.html',
  styleUrls: ['./atlist-data.component.scss']
})

export class AtlistDataComponent implements OnInit {
  
  items: ItemsInterface[] = [];
  
  constructor(private http : HttpClient) { }

  ngOnInit(): void {
    this.http
    .get<ItemsInterface[]>('http://localhost:3000/items')
    .subscribe((items: ItemsInterface[]) => {
      console.log(items)
      this.items = items
    })
  }
}
