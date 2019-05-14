import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day3';
  allVideosFlag= false;
  favouritesFlag= false;
  recommendedFlag=false;
  playFlag =false;

  Reset(){
    this.allVideosFlag=false;
    this.favouritesFlag=false;
    this.recommendedFlag=false;
    this.playFlag=false;
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
}
