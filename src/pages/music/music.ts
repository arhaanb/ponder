import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-music',
  templateUrl: 'music.html',
})

export class MusicPage {

  audio: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.audio1();
  }
  audio1() {
    this.audio = new Audio("../../assets/a1.ogg");
    this.audio.play();
  }
  audio2() {
    this.audio = new Audio("../../assets/a2.ogg");
    this.audio.play();
  }
  audio3() {
    this.audio = new Audio("../../assets/a3.ogg");
    this.audio.play();
  }
  audio4() {
    this.audio = new Audio("../../assets/a4.ogg");
    this.audio.play();
  }
  audio5(){
    this.audio = new Audio("../../assets/a5.ogg");
    this.audio.play();
  }
  audio6(){
    this.audio = new Audio("../../assets/a6.ogg");
    this.audio.play();
  }
  startAudio() {
    this.audio.play();
  }
  stopAudio() {
    this.audio.pause(); 
  }
}
