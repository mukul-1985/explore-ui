import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  navbarShow:boolean = true;

  constructor(
    private router: Router
  ) {
    this.router.events.subscribe(event => {
      if (event.constructor.name === "NavigationEnd") {
        //console.log("-------- " + (<any>event).url.split("/").slice(-1)[0]);
        if ((<any>event).url.split("/").slice(-1)[0] === '') {
          this.navbarShow = true;
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
