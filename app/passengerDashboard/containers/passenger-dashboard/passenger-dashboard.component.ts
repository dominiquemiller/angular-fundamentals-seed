import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: 
    `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>

      <passenger-detail></passenger-detail>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
            <span class="status"
                  [class.checked-in]="passenger.checkedIn"></span>
                  {{ i }} : {{ passenger.fullname }}
            <div class="date">
                 Check in date:
                 {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'shortDate') : '' }}
            </div>
        </li>
      </ul>
    </div>

    `
})

export class PassengerDashboardComponent implements OnInit {
    passengers: Passenger[];

    constructor () {}
    ngOnInit() {
      this.passengers = [{
        id: 1,
        fullname: 'Stephen',
        checkedIn: false,
        checkedInDate: null,
        children: null
      },{
        id: 2,
        fullname: 'Dude',
        checkedIn: true,
        checkedInDate: 1491242000000,
        children: [{ name: 'little nique', age: 11},
                   { name: 'Fiona', age: 1 }]
      },{
        id: 3,
        fullname: 'Andrea',
        checkedIn: true,
        checkedInDate: 1491242000003,
        children: [{ name: 'big boy', age: 22}]
      }]
  }

}