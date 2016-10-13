import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FindQuest } from '../find-quest/find-quest';
import { CreateQuest } from '../create-quest/create-quest';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tabHome: any = HomePage;
  tabFind: any = FindQuest;
  tabCreate: any = CreateQuest;

  constructor() {
  	console.log('no que feo en serio arectan rapido');
  }

}
