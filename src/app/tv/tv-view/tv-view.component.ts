import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-tv-view',
  templateUrl: './tv-view.component.html',
  styleUrls: ['./tv-view.component.css']
})
export class TvViewComponent implements OnInit {

  tvid:any;
  tvdata:any;
  // tv:any

  constructor(private dataservice:DataService,private active:ActivatedRoute) { }

  ngOnInit(): void {
    // this.tv = this.dataservice.television;

    this.tvid = this.active.snapshot.paramMap.get('id')
    if(this.tvid){
      this.tvdata = this.dataservice.television.filter((value)=>{
        return value.id == this.tvid
      });
    }

  }

}
