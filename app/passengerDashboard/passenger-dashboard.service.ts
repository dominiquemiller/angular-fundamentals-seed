import { Passenger } from './models/passenger.interface';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Passenger[] {
      return
  }

}