import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windDirection'
})
export class WindDirectionPipe implements PipeTransform {
  // Per NWS Glossary:
  // The true direction from which the wind is blowing at a given location (i.e., wind blowing from the north to the south is a north wind).
  // It is normally measured in tens of degrees from 10 degrees clockwise through 360 degrees. North is 360 degrees.
  // A wind direction of 0 degrees is only used when wind is calm.

  directions = ['calm', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW', 'N'];

  transform(value: any): string {
    const windDirection = this.directions[Math.round(value / 22.5)];
    return windDirection;
  }

}
