import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { companyContactDetails } from '../product-constants';

import { AswireService } from "../aswire.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  contactDetails = companyContactDetails;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private aswireService: AswireService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      for (let i = 0; i < this.aswireService.products.length; i++) {
        //console.log(">>> " + this.aswireService.products[i].id + " -- " + params.get('id'));
        if (this.aswireService.products[i].id === +params.get('id')) {
          this.product = this.aswireService.products[i];
        }
      }
    });
  }

}
