import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-accs-view',
  templateUrl: './accs-view.component.html',
  styleUrls: ['./accs-view.component.css']
})
export class AccsViewComponent implements OnInit {

  mobileAccsid:any;
  mobileAccsdata:any;

  tagimg = 'https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90';

  constructor(private dataservice:DataService, private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.mobileAccsid = this.activeRoute.snapshot.paramMap.get('id')
    if(this.mobileAccsid)
    {
      this.mobileAccsdata = this.dataservice.mobileAccs.filter((value)=>{
        return value.id == this.mobileAccsid
      });
    }
  }

}
