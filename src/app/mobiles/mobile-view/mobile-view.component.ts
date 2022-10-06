import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-mobile-view',
  templateUrl: './mobile-view.component.html',
  styleUrls: ['./mobile-view.component.css']
})
export class MobileViewComponent implements OnInit {

  tagimg = 'https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90';

  mobileid:any;
  mobiledata:any;

  constructor(private dataservice:DataService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.mobileid = this.activeRoute.snapshot.paramMap.get('id')
    if(this.mobileid){
      this.mobiledata = this.dataservice.mobiles.filter((value)=>{
          return value.id == this.mobileid
      })
    }
  }

}
