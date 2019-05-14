import { Component, OnInit } from '@angular/core';
import {MediaService} from '../media.service'
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent   {
   playFlag=false;
  favourites=[];
  currentVideo="";

  constructor(private _service:MediaService){
      this.favourites=_service.GetFavourite();
  }

    AddTofavourite(v){
      this._service.AddToFavourite(v);
    }
  Play(video){
    this.playFlag=true; 
    this.currentVideo= video.path;

   }
}
