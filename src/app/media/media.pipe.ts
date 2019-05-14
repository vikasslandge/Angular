import { Pipe, PipeTransform } from '@angular/core';
import {} from './media.component'
@Pipe({
  name: 'videoPipe'
})
export class MediaPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    args= args?args.toLocaleLowerCase():null;
    return args?value.filter(v=>v.category.toLocaleLowerCase().indexOf(args))!=-1:value;
  }

}
