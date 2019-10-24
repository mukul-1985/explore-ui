import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { AswireService } from "../aswire.service";

@Component({
  selector: 'app-remove-product',
  templateUrl: './remove-product.component.html',
  styleUrls: ['./remove-product.component.css']
})
export class RemoveProductComponent implements OnInit {

  products: any;
  form: FormGroup;

  constructor(
    private aswireService: AswireService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.products = aswireService.products;
    this.form = this.formBuilder.group({
      removeProducts: new FormArray([])
    });
    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.products.forEach((o, i) => {
      const control = new FormControl(false); // checkbox will be checked if set to true
      (this.form.controls.removeProducts as FormArray).push(control);
    });
  }

  submit() {
    const productArrayType: Array<{ id: number }> = [];
    const selectedProductId = this.form.value.removeProducts
      .map((v, i) => v ? productArrayType.push({ id: this.products[i].id }) : null)
      .filter(v => v !== null);
    console.log(productArrayType);
    this.aswireService.removeItems(productArrayType).subscribe((data: String) => {
      console.log(data)
    });

    this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });
  }

  ngOnInit() {
  }

}
