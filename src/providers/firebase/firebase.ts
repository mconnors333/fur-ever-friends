import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
 
@Injectable()
export class FirebaseProvider {
 
  constructor(public afd: AngularFireDatabase) { }
 
  getUsers() {
    return this.afd.list('/users/');
  }
 
  addUser(name) {
    this.afd.list('/users/').push(name);
  }
 
  removeUser(id) {
    this.afd.list('/users/').remove(id);
  }
}