import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-mob-accs',
  templateUrl: './mob-accs.component.html',
  styleUrls: ['./mob-accs.component.css']
})
export class MobAccsComponent implements OnInit {

  mobileAccs1:any

  constructor(private datservice:DataService) { }

  ngOnInit(): void {
    this.mobileAccs1 = this.datservice.mobileAccs;
  }

}
