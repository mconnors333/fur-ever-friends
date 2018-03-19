import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html'
})
export class MessagesPage {
  items: any[];

  constructor(public navCtrl: NavController) {
    this.items = [];
    for(let i = 1; i < 21; i++){
      this.items.push({
        id: i,
        text: 'Item ' + i
      });
    }
  }

  itemSelected(item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }

}
