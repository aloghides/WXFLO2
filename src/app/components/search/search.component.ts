import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() wxOnSearch: EventEmitter<any> = new EventEmitter();
  @Input() location: any;

  constructor() { }

  submitted = false;

  onSubmit() { this.submitted = true; }

  updateWeather(){
    const payload = {
      event: {
          location: this.location
      }
    };
    this.wxOnSearch.emit(payload);
  }

  ngOnInit(): void {
  }

}
