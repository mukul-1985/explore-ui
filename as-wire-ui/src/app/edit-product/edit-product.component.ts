import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from "@angular/forms";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';

import { companyContactDetails } from '../product-constants';
import { AswireService } from "../aswire.service";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  contactDetails = companyContactDetails;
  updatedProduct: any;
  progressBarVisible: boolean = false;
  uploadPercent: number;
  downloadURL: String;

  constructor(
    private formBuilder: FormBuilder,
    private fileStorage: AngularFireStorage,
    private activatedRoute: ActivatedRoute,
    private aswireService: AswireService,
    private router: Router
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      for (let i = 0; i < this.aswireService.products.length; i++) {
        ///console.log(">>> " + this.aswireService.products[i].id + " -- " + params.get('id'));
        if (this.aswireService.products[i].id === +params.get('id')) {
          this.updatedProduct = this.formBuilder.group({
            id: this.aswireService.products[i].id,
            name: this.aswireService.products[i].name,
            title: this.aswireService.products[i].title,
            description: this.aswireService.products[i].description,
            imageUri: this.aswireService.products[i].imageUri
          });
          this.downloadURL = this.aswireService.products[i].imageUri;
        }
      }
    });
  }

  uploadFile(event) {
    this.progressBarVisible = false;
    const file = event.target.files[0];
    const filePath = 'as-wire/' + file.name;
    const fileRef = this.fileStorage.ref(filePath);
    const task = this.fileStorage.upload(filePath, file);

    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(data => {
          this.downloadURL = data;
          this.progressBarVisible = false;
        })
      })
    )
      .subscribe();
    this.progressBarVisible = true;

    // observe percentage changes
    task.percentageChanges().subscribe(data => {
      console.log("-----------per------" + data);
      this.uploadPercent = data;
    });

  }

  onSubmit(productData) {
    productData.imageUri = this.downloadURL;
    productData.title = productData.name;
    this.aswireService.updateItem(productData).subscribe(data => console.log(data));
    this.updatedProduct.reset();
    // navigae back to home
    this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });;
  }

}
