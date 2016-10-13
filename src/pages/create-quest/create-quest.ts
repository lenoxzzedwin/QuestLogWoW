import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestModel } from '../../models/quest';
import {HomePage} from '../home/home';
/*
  Generated class for the CreateQuest page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-create-quest',
  templateUrl: 'create-quest.html'
})
export class CreateQuest {

  newQuest:QuestModel = new QuestModel({});

  constructor(public navCtrl: NavController) {}

  submit(pQuest){
  	console.log(pQuest);
  	pQuest = new QuestModel({});
  }

  ionViewDidLoad() {
    console.log('Hello CreateQuest Page');
  }



}
