import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../shared/models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../../pages/tabs/tabs'; 
import { HomePage } from '../../pages/home/home'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }
 
  async login(user: User) {
    try {
      const result = await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }  
    }
    catch (e) {
      console.error(e);
    }
  }

 
  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(
        user.email,
        user.password
      );
      if (result) {
        this.navCtrl.setRoot(TabsPage);
      }
    } catch (e) {
      console.error(e);
    }
  }
}