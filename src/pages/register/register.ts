import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth} from 'Firebase/app';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  email:string;
  password:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public menu:MenuController,public afAuth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  ionViewDidEnter() {
    
    this.menu.enable(false);
  }

  ionViewWillLeave() {
    
    this.menu.enable(true);
}
  async register(){
    const{email,password}=this
   try{
   
      const res= await this.afAuth.auth.createUserWithEmailAndPassword(email,password);

   }catch(err){
     console.dir(err);
   }
   
    alert('Your Login credentials are ' + ' ' + email + " " + password);
    this.navCtrl.setRoot('HomePage');

  }

}
