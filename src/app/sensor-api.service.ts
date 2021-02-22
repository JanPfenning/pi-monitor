import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SensorApiService {

  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
    this.ping().subscribe(next => {console.log(next)}, error => {console.log(error)});
  }

  getTemp(table: string, from: number, to: number): Observable<string>{
    return this.httpClient.get(`http://192.168.178.83:3000/sensor/${table}/${from}/${to}`,{responseType: 'text'});
    //return this.httpClient.get<any>(`localhost:3000/sensor/${from}/${to}`);
  }

  ping(): Observable<string>{
    return this.httpClient.get(`http://192.168.178.83:3000/public/ping`,{responseType: 'text'});
    //return this.httpClient.get<any>(`localhost:3000/sensor/${from}/${to}`);
  }
}
