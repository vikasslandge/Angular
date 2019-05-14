import { Component, OnInit } from '@angular/core';
import {MediaService} from '../media.service'
@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css']
})
export class RecommendedComponent  {
 
  playFlag =false;
  currentVideo="";
  recommended=[];
constructor(_service:MediaService){
  this.recommended=_service.GetRecommended();
}

Play(video){
  this.playFlag=true; 
  this.currentVideo= video.path;

 }
}
