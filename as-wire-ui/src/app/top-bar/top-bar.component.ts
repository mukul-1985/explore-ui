import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  navbarShow:boolean = true;
  navbarAdd:boolean = true;
  navbarRemove:boolean = true;
  navbarEdit:boolean = true;
  navbarHome:boolean = true;

  productsId:String;
  
  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.productsId = '';
        const currentRoute:String = (<any>event).url.split("/").slice(-1)[0];
        
        //console.log("-------- " + currentRoute);
        if (currentRoute === '') {
          this.navbarShow = true;
          this.navbarAdd = true;
          this.navbarRemove = true;
          this.navbarEdit = false;
          this.navbarHome = false;
        } else if(currentRoute === 'add') {
          this.navbarShow = false;
        } else if(currentRoute === 'remove') {
          this.navbarShow = true;
          this.navbarAdd = false;
          this.navbarRemove = false;
          this.navbarEdit = false;
          this.navbarHome = true;
        } else if((<any>event).url.split("/").slice(-2)[0] === 'edit') {
          this.navbarShow = true;
          this.navbarAdd = false;
          this.navbarRemove = false;
          this.navbarEdit = false;
          this.navbarHome = true;
        } else if((<any>event).url.split("/").slice(-2)[0] === 'products') {
          this.productsId = (<any>event).url.split("/").slice(-1)[0];
          this.navbarShow = true;
          this.navbarAdd = false;
          this.navbarRemove = false;
          this.navbarEdit = true;
          this.navbarHome = true;
        } else {
          this.navbarShow = false;
        }
      }
    })
   }

  ngOnInit() { }

 
  /*
   <nav *ngIf="this.currentRoute!=='login'" navigation>
   </nav>
   
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        this.name = (<any>event).url.split("/").slice(-1)[0];
        this.isLogin = this.currentRoute === 'login';
      }
    })
  */
   
    
}
