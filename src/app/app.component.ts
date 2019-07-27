import {Component, OnInit} from '@angular/core';
import {Userservice} from './userservice';
import {NgForm} from '@angular/forms';
import {User} from './User/UserModel';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'untitled4';

  constructor(private httpuserservice: Userservice) {

  }
  user: User = new User();
  users: User[] = [];
  ngOnInit() {
    this.getUsersList();
  }
  createuser(formuser: NgForm) {
    this.httpuserservice.createUser(this.user);
  }
  getUsersList() {
    this.httpuserservice.getUsersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(users => {
      this.users = users;
    });
  }


}
