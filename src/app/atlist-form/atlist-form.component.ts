import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { ItemsInterface } from '../model/item';
import { CategoryInterface } from '../model/category';
import { MeasureUnitInterface } from '../model/measureUnit';

@Component({
  selector: 'app-atlist-form',
  templateUrl: './atlist-form.component.html',
  styleUrls: ['./atlist-form.component.scss']
})

export class AtlistFormComponent {
  
  addItemForm = this.fb.group({
    id:null,
    uploader: [null, Validators.required],
    updatedOn: null,
    itemName: [null, Validators.required],
    category: [null, Validators.required],
    description: [null, Validators.required],
    measureUnit: [null, Validators.required],
    baseQuantity: [null, Validators.required],
    quantity: [null, Validators.required],
    price: [null, Validators.required],
    stockAvailable: [null, Validators.required],
    publish: ['yes', Validators.required],
    //image: URL
    
  });

  itemCategory: CategoryInterface[] = [];
  itemMeasureUnits: MeasureUnitInterface[] = [];

  constructor(private fb: FormBuilder, private http : HttpClient) {}
  
  getCategories() {
    this.http
    .get<CategoryInterface[]>('http://localhost:3000/itemCategory')
    .subscribe((itemCategory: CategoryInterface[]) => {
      console.log(itemCategory)
      this.itemCategory = itemCategory
    })
  }

  getUnits() {
    this.http
    .get<MeasureUnitInterface[]>('http://localhost:3000/itemMeasureUnits')
    .subscribe((itemMeasureUnits: MeasureUnitInterface[]) => {
      console.log(itemMeasureUnits)
      this.itemMeasureUnits = itemMeasureUnits
    })
  }

  ngOnInit(): void {
    this.getCategories();
    this.getUnits()
  }

  onSubmit(): void {
    // alert(this.addressForm);
    console.log(this.addItemForm.value);
    alert(this.addItemForm.value);

    // this.http
    // .post<any>('http://localhost:3000/items',{})
    // .subscribe(items => {
    //   console.log(items)
    //   this.addItemForm = items
    // })
  }

}
