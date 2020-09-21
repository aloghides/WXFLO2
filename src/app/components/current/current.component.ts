import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit, CommonModule {

  @Input() weatherData: any;

  constructor() { }

  ngOnInit(): void {
  }

}
