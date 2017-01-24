import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Passenger } from '../../models/passenger.interface'
import { Child } from '../../models/passenger.interface'

@Component({
    selector: 'passenger-detail',
    styleUrls: ['../../containers/passenger-dashboard/passenger-dashboard.component.scss'],
    template: `
      <div>
        <span class="status" [class.checked-in]="detail.checkedIn"></span>
        <div *ngIf="editing">
          <input type="text" 
                 [value]="detail.fullname"
                 (input)="onNameChange(name.value)"
                 #name>
        </div>
        <div *ngIf="!editing">
          {{ detail.fullname }}
        </div>
        <div class="date">
          Check in date: {{ detail.checkedInDate ? (detail.checkedInDate | date: 'shortDate') : '' }}
        </div>

        <div>Children</div>
        <div *ngFor="let child of detail.children">
          Name: {{ child.name}}, Age: {{ child.age }}
        </div>

        <button (click)="toggleEdit()">
          {{ editing ? 'Done' : 'Edit' }}
        </button>

        <button (click)="onRemove()">
          Remove
        </button>

      </div>
    `
})

export class PassengerDetailComponent implements OnChanges{
    @Input()
    detail: Passenger;

    child: Child;

    ngOnChanges(change) {
        if (change.detail) {
          this.detail = Object.assign({}, change.detail.currentValue);
        }
    }

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    editing: boolean = false;

    constructor() {}

    onNameChange(value: string) {

      this.detail.fullname = value;
    }

    toggleEdit() {
      if(this.editing) {
        this.edit.emit(this.detail);
      }
      this.editing = !this.editing;
    }
    
    onRemove() {
      this.remove.emit(this.detail);
    }

}