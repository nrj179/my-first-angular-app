import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '.app-servers',
  // selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  isDisplay = false;
  username = '';
  buttonClicks = [];
  numberClicks = [];

  constructor() { 
  }

  ngOnInit(): void {
  }

  displayDetails() {
    this.isDisplay = !this.isDisplay;
    this.buttonClicks.push(new Date());
    // this.numberClicks.push(this.numberClicks.length+1);
  }

  getColor(num) {
    if (num > 4) {
      return 'blue';
    }
    return 'white';
  }

}
