import { Injectable } from '@angular/core';
import {HttpResponse,HttpClient,HttpClientModule} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {IVideo} from './IVideo'
@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private _http:HttpClient) {

   }
  videos =[];
    url="./assets/data/videos.json";


  favourites=[];

  recommended=[
    {id:1,name:"Avengers EndGame",category:"Action",path:"./assets/endgame.mp4"},
  ]
  GetVideo():Observable<any>{
    return this._http.get<any>(this.url);
    
  }

  GetRecommended(){
     return this.recommended;
  }
  GetFavourite(){
    return this.favourites;
  }
  AddToFavourite(v){
      this.favourites.push(v);
  }
}
