import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaPipe } from './media.pipe';
import {Form, FormsModule} from '@angular/forms'
import { MediaComponent } from './media.component';
import {MediaService} from '../media/media.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecommendedComponent } from './recommended/recommended.component'

@NgModule({
  declarations: [MediaModule, FavouriteComponent, RecommendedComponent,RecommendedComponent ], 
  imports: [
    CommonModule,FormsModule
  ],
  providers:[MediaService],
  exports: [ ]
})
export class MediaModule { }
