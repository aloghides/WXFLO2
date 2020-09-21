import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe extends DecimalPipe implements PipeTransform {

    decimalPipe = new DecimalPipe('en-US');

  transform(value: number, unit1: string, unit2: string): string {
    let temperature: number;
    let result: string;

    if (unit1 !== undefined && unit2 !== undefined){
        const conversion: string = unit1.toLowerCase().concat(unit2.toLowerCase());
        switch (conversion){
            case 'cf':
                temperature = (value * 1.8) + 32;
                result = `${this.decimalPipe.transform(temperature, '1.0-1')}°F`;
                break;
            case 'fc':
                temperature = (5 / 9) * (value - 32);
                result = `${this.decimalPipe.transform(temperature, '1.0-1')}°C`;
                break;
            case 'ck':
                temperature = value + 273;
                result = `${this.decimalPipe.transform(temperature, '1.0-1')}K`;
                break;
            case 'kc':
                temperature = value - 273;
                result = `${this.decimalPipe.transform(temperature, '1.0-1')}°C`;
                break;
            case 'kf':
                temperature = (1.8 * (value - 273)) + 32;
                result = `${this.decimalPipe.transform(temperature, '1.0-1')}°F`;
                break;
            case 'fk':
                temperature = ((5 / 9) * (value - 32)) + 273;
                result = `${this.decimalPipe.transform(temperature, '1.0-1')}K`;
                break;
        }
    } else if (unit1 !== undefined && unit2 === undefined) {
        result = `${value}°${unit1.toUpperCase()}`;
    } else {
        result = 'invalid pipe syntax';
    }

    return result;
  }

}
