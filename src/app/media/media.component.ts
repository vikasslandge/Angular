import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  allVideosFlag= false;
  favouritesFlag= false;
  recommendedFlag=false;
  playFlag =false;

  favourites=[];
  recommended=[
    {id:1,name:"Avengers EndGame",category:"Action",path:"./assets/endgame.mp4"},
  ]
   videos =[
     {id:1,name:"Avengers EndGame",category:"Action",path:"./assets/endgame.mp4"},
     {id:2,name:"video2",category:"Action",path:"./assets/sample.mp4"},
     {id:3,name:"video3",category:"Action",path:"./assets/endgame.mp4"},
     {id:4,name:"video4",category:"Action",path:"./assets/Wildlife.wmv"}
   ]

   currentVideo="";
Reset(){
  this.allVideosFlag=false;
  this.favouritesFlag=false;
  this.recommendedFlag=false;
  this.playFlag=false;
}
   Play(video){
    this.playFlag=true; 
    this.currentVideo= video.path;

   }

   Choice(no){
      this.Reset();
     switch(no){
        case 1: this.allVideosFlag=true;
                break;
        case 2: this.favouritesFlag=true;
                break;
        case 3: this.recommendedFlag=true;
                break;
     }
   }
   AddToFavourite(video){
     this.favourites.push(video);
   }

}
