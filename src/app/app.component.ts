/* tslint:disable */
import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../app/services/weather/weather.service';
import { GeolocationService } from '../app/services/geolocation/geolocation.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	title = 'wxflo-client';
	location: any;
	weatherData: any;
	test: any;

	constructor(private weatherService: WeatherService, private geolocationService: GeolocationService){
		
	}

	ngOnInit(){
		this.geolocationService.getPosition()
			.then(coordinates => {
			const {latitude, longitude} = coordinates;
				this.weatherService.get(latitude, longitude).subscribe((data) => {
					console.log(data);
					this.weatherData = data;
					this.location = `${this.weatherData.meta.properties.relativeLocation.properties.city}, ${this.weatherData.meta.properties.relativeLocation.properties.state}`;
				});
			})
			.catch(err => console.error('App', err));
  	}

  	wxOnSearch(location){
		this.location = location.event.location;
    	this.weatherService.getByLocation(this.location).subscribe((data) => {
			this.weatherData = data;
		});
		console.log(this.weatherData);
		this.location = `${this.weatherData.meta.properties.relativeLocation.properties.city}, ${this.weatherData.meta.properties.relativeLocation.properties.state}`;
  	}

}
