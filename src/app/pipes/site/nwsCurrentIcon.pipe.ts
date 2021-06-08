import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nwsCurrentIcon'
})
export class NwsCurrentIconPipe implements PipeTransform {

  transform(value: string): string {
    return `https://www.weather.gov/images/nws/newicons/${value}`;
  }

}
