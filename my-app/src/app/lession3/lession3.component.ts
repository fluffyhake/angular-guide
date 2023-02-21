import { Component } from '@angular/core';

@Component({
  selector: 'app-lession3',
  templateUrl: './lession3.component.html',
  styleUrls: ['./lession3.component.css'],
})
export class lession3Component {
  viewstatus: boolean = false;
  increment: number = 0;
  togglelog = [];

  toggle() {
    console.log('Toggle triggered');
    if (this.viewstatus == false) {
      this.viewstatus = true;
    } else if (this.viewstatus == true) {
      this.viewstatus = false;
    }
    this.togglelog.push(this.increment);
    this.increment = this.increment + 1;
    console.log(this.togglelog);
  }
  getColor(entry) {
    return entry >= 5 ? 'blue' : '';
  }
  betterToggle() {
    this.viewstatus = !this.viewstatus;
    this.togglelog.push(this.togglelog.length + 1);
  }

  bestToggle() {
    this.togglelog.push(new Date());
  }
}
