import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaComponent } from '../media/media.component';
import { MediaModule } from '../media/media.module';
import {FormsModule} from '@angular/forms'
import { MediaPipe } from '../media/media.pipe';
import { RecommendedComponent } from '../media/recommended/recommended.component';
import { FavouriteComponent } from '../media/favourite/favourite.component';
import {HttpResponse,HttpClient,HttpClientModule} from '@angular/common/http';
 

@NgModule({
  declarations: [
    AppComponent,MediaComponent,RecommendedComponent,FavouriteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
