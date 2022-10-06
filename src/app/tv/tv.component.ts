import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  tv:any;

  constructor(private dataservice:DataService) { }

  ngOnInit(): void {

    this.tv = this.dataservice.television;
  }

}
