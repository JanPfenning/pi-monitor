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
  }

  getTemp(from: number, to: number): Observable<any>{
    return this.httpClient.get<any>(`localhost:3000/sensor/${from}/${to}`);
  }
}
