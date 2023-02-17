import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lession2',
  // template: `<app-server></app-server> <app-server></app-server>`,
  templateUrl: './lession2.component.html',
  styleUrls: ['./lession2.component.css'],
})
export class lession2Component {
  username: String = '';

  resetUsername() {
    console.log('RESETTING USERNAME');
    this.username = '';
  }
}
