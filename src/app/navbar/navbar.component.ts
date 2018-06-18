import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';
  status = 'close';

  constructor() { }

  ngOnInit() {
  }

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  toggle() {
    if(status === 'close') {
      this.sidenav.open();
      status = 'open';
    } else {
      this.sidenav.close();
      status = 'close';
    }
  }

  navigateTo() {
    
  }
}
