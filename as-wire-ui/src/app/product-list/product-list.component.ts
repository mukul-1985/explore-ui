import { Component, OnInit } from '@angular/core';

//import { products } from '../products';

import { AswireService } from "../aswire.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  spinnerVisible:boolean = true;
  products = [];

  constructor(
    private aswireService: AswireService
  ) {}

  ngOnInit() {
    this.aswireService.getItems().subscribe(( data: any[]) => {
      //console.log(data);
      this.products = data;
      this.aswireService.products = this.products;
      this.spinnerVisible = false;
    })
  }

}
