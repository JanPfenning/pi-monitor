import { Component, OnInit } from '@angular/core';
import {SensorApiService} from "./sensor-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Web-Interface';
  sensorService: SensorApiService;
  tempPastDayJSON;

  constructor(sensorService: SensorApiService) {
    this.sensorService = sensorService;
  }

  ngOnInit(){
    this.tempPastDay();
  }

  tempPastDay(){
    this.sensorService.getTemp('sensor', 24, 0).subscribe({
      next: x => {console.log('Observer got a next value: ' + x); this.tempPastDayJSON = x},
      error: err => console.error('Observer got an error: ' + JSON.stringify(err)),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

}
