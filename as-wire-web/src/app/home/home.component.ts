import { Component, OnInit } from '@angular/core';

import { AswireService } from "../aswire.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  spinnerVisible: boolean = true;
  products = [];

  constructor(
    private aswireService: AswireService
  ) { }

  ngOnInit() {
    this.aswireService.getItems().subscribe((data: any[]) => {
      console.log(data);
      this.products = data;
      //this.aswireService.products = this.products;
      this.spinnerVisible = false; 
    })
  }

}
