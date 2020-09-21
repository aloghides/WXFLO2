// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { CurrentComponent } from './components/current/current.component';
import { HourlyComponent } from './components/hourly/hourly.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// Pipes
import { DecimalPipe } from '@angular/common';
import { TemperaturePipe } from './pipes/temperature/temperature.pipe';
import { WindDirectionPipe } from './pipes/wind/windDirection.pipe';
import { WindSpeedPipe } from './pipes/wind/windSpeed.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CurrentComponent,
    HourlyComponent,
    ForecastComponent,
    NavigationComponent,
    TemperaturePipe,
    WindDirectionPipe,
    WindSpeedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
