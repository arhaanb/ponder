import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-logger',
  templateUrl: 'logger.html',
})
export class LoggerPage {
  todos: string[] = [];
  todo: string;
  protime=[];
  acttime;
  constructor(public navCtrl: NavController) {
  }

  private mode(arr1:any) {
    var mf = 1;
    var m = 0;
    var item;
    for (var i = 0; i < arr1.length; i++) {
      for (var j = i; j < arr1.length; j++) {
        if (arr1[i] == arr1[j])
          m++;
        if (mf < m) {
          mf = m;
          item = arr1[i];
        }
      }
      m = 0;
    }
    return item;
  }

  public add() {
    this.todos.push(this.todo);
    this.todo = "";
    let date = new Date()
    this.protime.push(date.getHours());
    this.acttime = this.mode(this.protime);
  }
}
