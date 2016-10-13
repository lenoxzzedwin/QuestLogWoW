import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import {NativeAudio , SQLite} from 'ionic-native';


import { QuestModel } from '../../models/quest';
import { DetailsQuestPage } from '../details-quest/details-quest';
import { QuestService } from '../../services/questService';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public quests:QuestModel[]= [];
  quest:QuestModel;
  newQuest:QuestModel;

  constructor(private navCtrl: NavController,private questService:QuestService) {
  	console.log('Consturctor pe papu');
    console.log('[quest service ] -> ', questService);
  	this.quests =[
  				new QuestModel({title:'Poema de Alicia',type : 1 ,description :   "Hola, escribí un poema para mi amiga Caylee. Le gusta salir con los Aldor en la Ciudad de Shattrath, en Terrallende, ¿sabes? ¿Podrías llevarle mi poema? ¡Mi mamá dice que aún soy demasiado pequeña para ir a la Ciudad de Shattrath"}),
  				new QuestModel({title:'Aprender Ionic 2',type:2}),
  				new QuestModel({title:'Aprender ReactNative',type:3}),
  				new QuestModel({title:'Aprender das',type:1}),
  				new QuestModel({title:'Aprender ReactNdasdasative',type:2})]
  				console.log(this.quests);


        NativeAudio.preloadComplex('preloadComplex', './assets/audio/richard.mp3',1,1,0).then(this.onSuccess, this.onError);

    /*
    NativeAudio.loop('questLog').then(this.onSuccess, this.onError);
    NativeAudio.play('questCompleted').then(this.onSuccess, this.onError);

    NativeAudio.setVolumeForComplexAsset('questLog', 0.6).then(this.onSuccess,this.onError);

    NativeAudio.stop('questCompleted').then(this.onSuccess,this.onError);

    NativeAudio.unload('questCompleted').then(this.onSuccess,this.onError);*/
  }

  onSuccess(){
    console.log('Succes Audio');
  }

  onError(){
    console.log('Error Audio');
  }

  addMision(pQuest){
    let newQuest = new QuestModel({    
      title : pQuest.title,
      description : pQuest.description
    });

    this.quests.push(newQuest);
    this.newQuest = new QuestModel({});
  }
  completedQuest(pQuest){
    console.log(pQuest);
  }
  removeQuest(pQuest){
    this.quests.splice(this.quests.indexOf(pQuest),1)
  }


  getClass(type){
  	console.log('No debe repetirse');
  	return 'quest-'+ (type== 1 ? 'simple':type==2 ? 'normal': type==3?'hard':'');
  }

  goToDetails(quest){
    //Nos vamos a un repositorio
    this.navCtrl.push(DetailsQuestPage, {
      quest: quest
    });

  }


}
