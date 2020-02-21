import { Component,Input,NgZone, ViewChild, ElementRef} from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,LoadingController} from 'ionic-angular';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@IonicPage()
@Component({
  selector: 'page-patent',
  templateUrl: 'patent.html',
})



export class PatentPage {
  text: string;
  public x = 2;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastController:ToastController,public loadingController: LoadingController) {}
  
  yoyo(){
  let screenLoad = this.loadingController.create({
      content: "Loading",
      duration: 1500
    });
  screenLoad.present();
  if(this.text==null){
    const toast = this.toastController.create({
      message: 'Enter Product',
      duration: 2000,
    });
    toast.present();
  }
  else{
 
    document.getElementById("myDIV").style.display = "block";
  }
 
  }    
  
  // public hello()
  // {
  //   var x=Math.floor(Math.random() * 11);
  //   var y =x*10;
  //   return y;   
  // }
}

