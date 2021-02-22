import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SensorApiService {

  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getTemp(from: number, to: number): Observable<any>{
    return null;//this.httpClient.get<any>(`localhost:3000/sensor/${from}/${to}`);
  }
}
