import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatentPage } from './patent';
import {ProgressBarModule} from "angular-progress-bar";

@NgModule({
  declarations: [
    PatentPage,
  ],
  imports: [
    ProgressBarModule,
    IonicPageModule.forChild(PatentPage),

  ],
})
export class PatentPageModule {}
