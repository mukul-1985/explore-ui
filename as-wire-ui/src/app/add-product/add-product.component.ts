import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';

import { AswireService } from "../aswire.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  newProduct: any;
  uploadPercent: number;
  downloadURL: String;
  imageVisible: boolean = false;
  progressBarVisible: boolean = false;
  inputFieldVisible: boolean = true;

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
    this.inputFieldVisible = false;
    this.imageVisible = false;
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
          this.imageVisible = true;
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
    this.router.navigate(['/'])
      .then(() => {
        window.location.reload();
      });;
  }
}
