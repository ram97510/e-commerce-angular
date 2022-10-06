import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {

  mobiles:any;

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {

    this.mobiles = this.dataservice.mobiles;
  }

}
