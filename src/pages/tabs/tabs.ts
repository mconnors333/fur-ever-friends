import { Component } from '@angular/core';

import { MessagesPage } from '../messages/messages';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagesPage;
  tab3Root = SettingsPage;

  constructor() {

  }
}
