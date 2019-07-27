import {Injectable} from '@angular/core';
import {User} from './User/UserModel';
import {AngularFireList} from '@angular/fire/database/interfaces';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class Userservice {
  private dbPath = '/users';

usersRef: AngularFireList <User> = null;
constructor (private db: AngularFireDatabase) {
  this.usersRef = db.list(this.dbPath);
}
  createUser(user: User): void {
    this.usersRef.push(user);
  }
  getUsersList(): AngularFireList<User> {
    return this.usersRef;
  }

}
