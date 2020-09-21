import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  private baseURL = 'https://desolate-escarpment-25315.herokuapp.com/weather/location';
  private posBaseURL = 'https://desolate-escarpment-25315.herokuapp.com/weather/position';

  constructor(private httpClient: HttpClient) {
    
  }
  public get(lat: string, lon: string){
    const url = `${this.posBaseURL}/${lat},${lon}`;
    return this.httpClient.get(url)
  };
  public getByLocation(location: string){
    const url = `${this.baseURL}/${location}`;
    return this.httpClient.get(url);
  };
}
