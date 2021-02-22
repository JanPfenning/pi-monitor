import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Web-Interface';
  //sensorService: SensorService;
  tempPastDayJSON;

  constructor(/*sensorService: SensorService*/) {
    //this.sensorService = sensorService;
  }

  ngOnInit(){
    this.tempPastDay();
  }

  tempPastDay(){
    //this.sensorService.getTemp(24).subscribe(ret => this.tempPastDayJSON = ret);
  }

}
