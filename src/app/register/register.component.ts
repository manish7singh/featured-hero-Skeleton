import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { BehaviorSubject } from 'rxjs';
import { AlertService, UserService } from '../_services/index';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  loading = false;
  showMenu: boolean; 
  
  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private appComponent: AppComponent
  ) {
    appComponent.showMenu = false;
  }

  ngOnInit() {}

  register() {
    this.loading = true;
    this.userService.create(this.model).subscribe(
      data => {
          this.alertService.success('Registration successful', true);
          this.router.navigate(['login']);
      },
      error => {
          this.alertService.error(error);
          this.loading = false;
      }
    );
  }
}
