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
  tempJSON;
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
                    this.tempJSON = json;
                    this.dataExists = this.reasonableData()
                  },
      error: err => console.error('Observer got an error: ' + JSON.stringify(err)),
      complete: () => console.log('Observer got a complete notification'),
    });
  }

  reasonableData() {
    return (Object.keys(this.tempJSON).length !== 0)
  }

  reverseData() {
    this.tempJSON = this.tempJSON.reverse()
  }

  exportCsv() {
    this.downloadFile(this.tempJSON);
  }

  downloadFile(data, filename = 'data') {
    let arrHeader = ["time", "temp"];
    let csvData = this.ConvertToCSV(data, arrHeader);
    console.log(csvData)
    let blob = new Blob(['\ufeff' + csvData], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", "temperature.csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
  }

  ConvertToCSV(objArray, headerList) {
    console.log(objArray);
    console.log(headerList);
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = '';

    let newHeaders = ["time", "temp"];

    for (let index in newHeaders) {
      row += newHeaders[index] + ';';
    }
    row = row.slice(0, -1);
    str += row + '\r\n';
    for (let i = 0; i < array.length; i++) {
      let line = '';
      for (let index in headerList) {
        let head = headerList[index];

        line += array[i][head] + ';';
      }
      line = line.slice(0,-1);
      str += line + '\r\n';
    }
    return str;
  }
}
