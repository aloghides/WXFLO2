import { Pipe, PipeTransform } from '@angular/core';
import { DecimalPipe } from '@angular/common';

@Pipe({
    name: 'windSpeed'
})
export class WindSpeedPipe extends DecimalPipe implements PipeTransform {

    decimalPipe = new DecimalPipe('en-US');

    transform(value: number, unit1: string, unit2: string): string {

        let speed: number;
        let result: string;

        if (unit1 !== undefined && unit2 !== undefined){
            const conversion: string = unit1.toLowerCase().concat(unit2.toLowerCase());
            switch (conversion){
                case 'kphmph':
                    speed = (value / 1.609);
                    result = `${this.decimalPipe.transform(speed, '1.0-1')}mph`;
                    break;
                case 'mphkph':
                    speed = (value * 1.609);
                    result = `${this.decimalPipe.transform(speed, '1.0-1')}kph`;
                    break;
                case 'msmph':
                    speed = (value * 2.237);
                    result = `${this.decimalPipe.transform(speed, '1.0-1')}mph`;
                    break;
                case 'mskph':
                    speed = (value * 3.6);
                    result = `${this.decimalPipe.transform(speed, '1.0-1')}kph`;
                    break;
                case 'ktsmph':
                    speed = (value * 1.151);
                    result = `${this.decimalPipe.transform(speed, '1.0-1')}mph`;
                    break;
                case 'mphkts':
                    speed = (value / 1.151);
                    result = `${this.decimalPipe.transform(speed, '1.0-1')}knots`;
                    break;
                case 'ktskph':
                    speed = (value * 1.852);
                    result = `${this.decimalPipe.transform(speed, '1.0-1')}kph`;
                    break;
                case 'kphkts':
                    speed = (value / 1.852);
                    result = `${this.decimalPipe.transform(speed, '1.0-1')}knots`;
                    break;
                case 'ktsms':
                    speed = (value / 1.944);
                    result = `${this.decimalPipe.transform(speed, '1.0-1')}m/s`;
                    break;
                case 'mskts':
                    speed = (value * 1.852);
                    result = `${this.decimalPipe.transform(speed, '1.0-1')}knots`;
                    break;
                case 'kphms':
                    speed = (value / 3.6);
                    result = `${this.decimalPipe.transform(speed, '1.0-1')}m/s`;
                    break;
                case 'mphms':
                    speed = (value / 2.237);
                    result = `${this.decimalPipe.transform(speed, '1.0-1')}m/s`;
                    break;
            }
        } else if (unit1 !== undefined && unit2 === undefined) {
            result = `${value}${unit1.toLowerCase()}`;
        } else {
            result = 'invalid pipe syntax';
        }

        return result;

    }

}
