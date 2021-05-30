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
  dataFromHoursAgo: number = 24;
  dataToHoursAgo: number = 0;
  public dataExists: boolean;
  reversed: boolean = false;

  constructor(sensorService: SensorApiService) {
    this.sensorService = sensorService;
  }

  ngOnInit(){
    this.getTemp();
  }

  getTemp(){
    this.sensorService.getTemp('sensor', this.dataFromHoursAgo, this.dataToHoursAgo).subscribe({
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

  reverseData() {
    this.tempPastDayJSON = this.tempPastDayJSON.reverse()
  }
}
