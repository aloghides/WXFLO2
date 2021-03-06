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
import { FooterComponent } from './components/footer/footer.component';

// Pipes
import { DecimalPipe } from '@angular/common';
import { TemperaturePipe } from './pipes/temperature/temperature.pipe';
import { WindDirectionPipe } from './pipes/wind/windDirection.pipe';
import { WindSpeedPipe } from './pipes/wind/windSpeed.pipe';
import { NwsIconsPipe } from './pipes/site/nwsIcons.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NwsCurrentIconPipe } from './pipes/site/nwsCurrentIcon.pipe';
import { PressurePipe } from './pipes/pressure/pressure.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CurrentComponent,
    HourlyComponent,
    ForecastComponent,
    NavigationComponent,
    FooterComponent,
    TemperaturePipe,
    WindDirectionPipe,
    WindSpeedPipe,
    PressurePipe,
    NwsIconsPipe,
    NwsCurrentIconPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    DecimalPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
