import { Component, OnInit } from '@angular/core';
import { MediaService } from './media.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  // allVideosFlag= false;
  // favouritesFlag= false;
  // recommendedFlag=false;
  playFlag =false;
videos=[];
//get videos from servie    

constructor(private _service:MediaService){
        _service.GetVideo().subscribe(s=>this.videos=s);
    }
  videoFilter=""
 

   currentVideo="";
// Reset(){
//   this.allVideosFlag=false;
//   this.favouritesFlag=false;
//   this.recommendedFlag=false;
//   this.playFlag=false;
// }
   Play(video){
    this.playFlag=true; 
    this.currentVideo= video.path;

   }
   AddToFavourite(v){
    this._service.AddToFavourite(v);
  }
 
  //  AddToFavourite(video){
  //    this.favourites.push(video);
  //  }

}
