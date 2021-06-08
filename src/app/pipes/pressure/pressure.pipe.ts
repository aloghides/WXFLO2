import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pressure'
})
export class PressurePipe implements PipeTransform {

  transform(value: number): number {
    return (value * 33.864);
  }

}
