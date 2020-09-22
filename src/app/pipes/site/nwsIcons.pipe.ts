import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nwsIcons'
})
export class NwsIconsPipe implements PipeTransform {

  transform(value: string, size: string, fontsize: string): string {

    let result: string;

    switch (value.split('?')[1].split('&')[0]){
      case 'size=small':
        result = value.replace('size=small', `size=${size}`);
        break;
      case 'size=medium':
        result = value.replace('size=medium', `size=${size}`);
        break;
      case 'size=large':
        result = value.replace('size=large', `size=${size}`);
        break;
    }

    if (fontsize){
      if (result.includes('fontsize=')) {
        result = result.replace(result.split('&')[1], `fontsize=${fontsize}`);
      } else {
        result = `${result}&fontsize=${fontsize}`;
      }
    }

    return result;
  }

}

// https://api.weather.gov/icons/land/night/sct?size=small
// https://api.weather.gov/icons/land/day/hot/blizzard?size=large
// https://api.weather.gov/icons/land/day/tornado,100?size=large&fontsize=24
