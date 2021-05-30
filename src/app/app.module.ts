import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SensorApiService} from "./sensor-api.service";
import {HttpClientModule} from "@angular/common/http";
import { ReplacePipe } from './replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [SensorApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
