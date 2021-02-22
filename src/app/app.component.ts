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
    this.sensorService.getTemp(24,0).subscribe(ret => this.tempPastDayJSON = ret);
  }

}
