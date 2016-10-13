import { Component } from '@angular/core';
import { NavController,NavParams  } from 'ionic-angular';

/*
  Generated class for the DetailsQuest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-details-quest',
  templateUrl: 'details-quest.html'
})
export class DetailsQuestPage {
  quest:any;
  constructor(public navCtrl: NavController,public navParams:NavParams) {
  	this.quest = navParams.get('quest');
    //document.querySelector("ion-tabbar")['style'].display = 'none';
  	console.log('this->',this.quest);
  }

ionViewWillEnter() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(80px)';
      });
    } // end if
  }

  ionViewDidLeave() {
    let tabs = document.querySelectorAll('.tabbar');
    if ( tabs !== null ) {
      Object.keys(tabs).map((key) => {
        tabs[ key ].style.transform = 'translateY(0)';
      });
    } // end if
  }

}

