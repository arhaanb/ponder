import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PintrestPage } from './pintrest';

@NgModule({
  declarations: [
    PintrestPage,
  ],
  imports: [
    IonicPageModule.forChild(PintrestPage),
  ],
})
export class PintrestPageModule {}
