import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.css']
})
export class HourlyComponent implements OnInit, CommonModule {

  @Input() weatherData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
