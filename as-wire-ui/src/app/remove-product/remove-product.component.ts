import { Component, OnInit } from '@angular/core';

import { AswireService } from "../aswire.service";

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {

  products: any;

  constructor(
    private aswireService: AswireService
  ) { 
    this.products = aswireService.products;
  }

  ngOnInit() {
  }

}
