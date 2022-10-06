import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.css']
})
export class SpeakersComponent implements OnInit {

  speakers1:any;

  constructor(private service:DataService) { }

  ngOnInit(): void {
    
    this.speakers1 = this.service.speakers;
  }

}
