import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { CreateQuest } from '../pages/create-quest/create-quest';
import { FindQuest } from '../pages/find-quest/find-quest';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DetailsQuestPage } from '../pages/details-quest/details-quest';
import { QuestService } from '../services/questService';

@NgModule({
  declarations: [
    MyApp,
    CreateQuest,
    FindQuest,
    HomePage,
    TabsPage,
    DetailsQuestPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CreateQuest,
    FindQuest,
    HomePage,
    TabsPage,
    DetailsQuestPage
  ],
  providers: [QuestService]
})
export class AppModule {}
