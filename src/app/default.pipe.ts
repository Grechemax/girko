import {PipeTransform} from "@angular/core";
import {Pipe} from '@angular/core';

@Pipe({
  name: 'DefaultPipe'
})
export class DefaultPipe implements PipeTransform {
  transform(value: string, fallback: string) { // transform always needs to be returned
    let image = '';
    if (value) {
      image = value;
    } else {
      image = fallback;
    }
    return image;
  }
}
