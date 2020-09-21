import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pressure'
})
export class PressurePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
