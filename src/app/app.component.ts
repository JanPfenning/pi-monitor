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
  public dataExists: boolean;

  constructor(sensorService: SensorApiService) {
    this.sensorService = sensorService;
  }

  ngOnInit(){
    this.tempPastDay();
  }

  tempPastDay(){
    this.sensorService.getTemp('sensor', 72, 48).subscribe({
      next: x => {
                    console.log('Observer got a next value: ' + x);
                    //this.tempPastDayJSON = x;
                    var json = JSON.parse(x);
                    this.tempPastDayJSON = json;
                    this.dataExists = this.reasonableData()
                  },
      error: err => console.error('Observer got an error: ' + JSON.stringify(err)),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

  reasonableData() {
    return (Object.keys(this.tempPastDayJSON).length !== 0)
  }
}
