import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AswireService } from "../aswire.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newProduct: any;
  uploadPercent: Observable<number>;
  downloadURL: String;
  imageVisible: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private fileStorage: AngularFireStorage,
    private aswireService: AswireService,
    private router: Router
  ) {
    this.newProduct = this.formBuilder.group({
      name: '',
      title: '',
      description: '',
      imageUri: ''
    });
  }

  uploadFile(event) {
    const file = event.target.files[0];
    const filePath = 'as-wire/' + file.name;
    const fileRef = this.fileStorage.ref(filePath);
    const task = this.fileStorage.upload(filePath, file);

    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe(data => {
          this.downloadURL = data;
          this.imageVisible = true;
        })
      })
    )
      .subscribe();

    /*this.uploadPercent.subscribe(data => {
      console.log("-----------per------" + data);
    });*/

  }

  ngOnInit() {
  }

  onSubmit(productData) {
    productData.imageUri = this.downloadURL;
    productData.title = productData.name;
    this.aswireService.addItem(productData).subscribe(data => console.log(data));
    this.newProduct.reset();
    this.backToHome();
  }

  backToHome() {
    this.router.navigate(['/']);
  }
}
