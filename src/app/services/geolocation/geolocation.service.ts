import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() {
    
  }

  getPosition(): Promise<any>{
    return new Promise((resolve, reject) => {
      if (!navigator.geolocation){
        reject('Geolocation Services are not available')
      } else {
        const success = position => {
          const {latitude, longitude} = position.coords;
          resolve({
              latitude,
              longitude
          });
        };
        const error = err => {
          reject(err)
        };
        navigator.geolocation.getCurrentPosition(success, error);
      }
    });
  }
}
