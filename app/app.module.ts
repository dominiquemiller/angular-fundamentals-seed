import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PassengerDashboardModule } from './passengerDashboard/passenger-dashboard.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    // angular modules
    BrowserModule,
    CommonModule,
    // custom modules
    PassengerDashboardModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ]
})
export class AppModule {}
