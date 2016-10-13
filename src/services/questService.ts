import { SQLite } from 'ionic-native';

import { Injectable } from '@angular/core';
import {NavController} from 'ionic-angular';


@Injectable()
export class QuestService{

    public quests;
    private db;
   

    constructor(){
    	//BD
    	this.db = new SQLite();

        this.db.openDatabase({
        	name: "dbQuest.db",
        	location: "default"
        }).then(() => {
           this.db.executeSql('CREATE TABLE IF NOT EXISTS  quest( title TEXT , description TEXT )',{}).then(()=>{
			  }, (err) => {
			    console.error('Unable to execute sql: ', err);
			  });
        }, (error) => {
            console.log("ERROR: ", error);
        });
    }

	public add(quest) {
	    this.db.executeSql("INSERT INTO quest (title, description) VALUES ('?', '?')", [quest.title,quest.description])
	    .then((data) => {
	        console.log("Insertado: " + JSON.stringify(data));
	    }, (error) => {
	        console.log("ERROR: " + JSON.stringify(error.err));
	    });
	}

	public getAll(){
		this.db.executeSql('SELECT * FROM quest',[]).then((data)=>{
			console.log('[DATA] ->',data);
		})
	}

	public refresh() {
	    this.db.executeSql("SELECT * FROM quest", []).then((data) => {
	        this.quests = [];
	        if(data.rows.length > 0) {
	            for(var i = 0; i < data.rows.length; i++) {
	                this.quests.push({firstname: data.rows.item(i).firstname, lastname: data.rows.item(i).lastname});
	            }
	        }
	    }, (error) => {
	        console.log("ERROR: " + JSON.stringify(error));
	    });
	}

}