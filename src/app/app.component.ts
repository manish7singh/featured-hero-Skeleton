import { Component } from '@angular/core';
import { UserService } from './_services';
import { Router } from '@angular/router';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    currentUser: User;
    users: User[] = [];
    showMenu = true;
    loggedIn = false;
    
    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log("Show Menu = " + this.showMenu);
    }

    ngOnInit() {
        this.loadAllUsers();
        // this.showMenu = false;
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}
