import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;
  password: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController, public afAuth: AngularFireAuth, public toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Register() {
    this.navCtrl.setRoot('RegisterPage');
  }
  ionViewDidEnter() {
    this.menu.enable(false);
  }

  ionViewWillLeave() {

    this.menu.enable(true);
  }
  async login() {
    const { email, password } = this
    console.log(this.email);
    console.log(this.password);
    var c = 0;
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      c++;
    } catch (err) {
      console.dir(err);
      if (err.code == "auth/user-not-found") {
        const toast = await this.toastController.create({
          message: 'User does not exist',
          duration: 2000,
        });
        toast.present();
      }
      if (err.code == "auth/wrong-password") {
        const toast = await this.toastController.create({
          message: 'Wrong Password',
          duration: 2000,
        });
        toast.present();
      }
    }
    if (c == 1) {
      const toast = await this.toastController.create({
        message: 'Logged in successfully',
        duration: 2000,
      });
      toast.present();
      this.navCtrl.setRoot('HomePage');
    }
  }
}