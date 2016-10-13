import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the FindQuest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-find-quest',
  templateUrl: 'find-quest.html'
})
export class FindQuest {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello FindQuest Page');
  }

}
