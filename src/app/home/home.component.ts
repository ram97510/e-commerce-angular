import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  mobiles:any;
  mobileAccs1:any;
  speakers1:any;
  televison1:any;

  constructor(private service:DataService)  { }

  ngOnInit(): void {

    this.mobiles = this.service.mobiles;

    this.mobileAccs1 = this.service.mobileAccs;

    this.speakers1 = this.service.speakers;

    this.televison1 = this.service.television;
}

}