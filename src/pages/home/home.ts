import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DogPicsProvider } from '../../providers/dog-pics/dog-pics';
import { Http, Response } from '@angular/http'; 
import { ProfilePage } from '../profile/profile';
import { FirebaseListObservable } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';


import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FirebaseProvider]
})
export class HomePage {
  user: any = {
    name: 'Rucker',
    photo: {},
    bio: '',
    isLiked: null,
    ownerRating: this.returnArray(5),
    dogRating: this.returnArray(4)
  };
  users: FirebaseListObservable<any[]>;
  newUser = '';

  private apiURL = 'https://dog.ceo/api/breeds/image/random';

  constructor(private http: Http, public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.getDogPicture();
    this.users = this.firebaseProvider.getUsers();
  }
 
  addUser(newItem) {
    this.firebaseProvider.addUser(this.newUser);
    this.newUser = '';
  }
 
  removeUser(id) {
    this.firebaseProvider.removeUser(id);
  }

  returnArray(rating) {
    let tmp = []

    for (let i = 0; i < rating; i++){
      tmp.push(i);
    }
    return tmp;
  }

  getData(){
    return this.http.get(this.apiURL).map((res: Response) => res.json());
  }

  getDogPicture() {
    this.getData().subscribe(data => {
      this.user.photo = data.message
    })
  }

  likeOrPassSwipe(event) {
    if(event.direction === 2) {
      this.pass();
    } else if (event.direction === 4) {
      this.like();
    }
  }

  like(){
    console.log('like');
    this.user.isLiked = true;
    this.changePic();
  }

  goToProfile() {
    console.log('going to profile');
    this.user.isLiked = null;
    this.navCtrl.push(ProfilePage, {user: this.user});
  }

  pass(){
    console.log('pass');
    this.user.isLiked = false;
    this.changePic()
  }

  changePic() {
    this.getDogPicture();
  }
  
}
