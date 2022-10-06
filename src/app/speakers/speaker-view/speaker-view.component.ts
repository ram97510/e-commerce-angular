import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-speaker-view',
  templateUrl: './speaker-view.component.html',
  styleUrls: ['./speaker-view.component.css']
})
export class SpeakerViewComponent implements OnInit {

  tagimg = 'https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90';

  speaker_id:any;
  speaker_data:any;

  constructor(private dataservice:DataService,private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.speaker_id = this.activeRoute.snapshot.paramMap.get('id')
    if(this.speaker_id){
      this.speaker_data = this.dataservice.speakers.filter((value)=>{
        return value.id == this.speaker_id
      })
    }
  }

}
