import {Utils} from '../utils/utils';
let utils:Utils = new Utils();

export class QuestModel{

	id: string;
	title: string;
	description: string;
	date : Date;
	status : number;
	type : number;

	constructor(obj: any){
		this.id = obj.id || utils.randomId();
		this.title = obj.title || '';
		this.description = obj.description || '';
		this.date = obj.date || new Date();
		this.status = obj.status || 1;
		this.type = obj.type || 2;
	}
}