import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from "../../shared/models/user";
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../../pages/tabs/tabs'; 
import { HomePage } from '../../pages/home/home';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {

  }

  async logout() {
    console.log('log out');
    try {
      console.log('log try');
      console.log(this.afAuth.auth);

      const result = await this.afAuth.auth.signOut();
      console.log(this.navCtrl.getViews())
      this.navCtrl.push(LoginPage);

      console.log(result)
      if (result) {
        console.log('log resutl');
        console.log(this.navCtrl);
        this.navCtrl.setRoot(LoginPage);
      }  
    }
    catch (e) {
      console.error(e);
    }
  }
}
