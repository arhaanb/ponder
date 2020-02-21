import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Chart } from 'chart.js';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild('barCanvas') barCanvas;

  barChart: any;
  username: string;
  password: string;
  slideOpts = {
    effect: 'flip'
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingController: LoadingController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'line',
      data: {
          labels: ["18 OCT", "19 OCT", "20 OCT", "21 OCT", "22 OCT", "23 OCT" , "24 OCT"],
          datasets: [{
              fill: 'start',
              label: '',
              data: [9, 12, 11, 13, 14,18,10],
              backgroundColor: [
                  'rgba(255,255,255,0)'
            
              ],
              borderColor: [
                  'rgba(102, 153, 238,1)',
                //   'rgba(54, 162, 235, 1)',
                //   'rgba(255, 206, 86, 1)',
                //   'rgba(75, 192, 192, 1)',
                //   'rgba(153, 102, 255, 1)',
                //   'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1,
          }]
      },
      options: {
          legend: {
            display:false,
          },
       
          scales: {
              yAxes: [{
                  ticks: {
                    fontColor: 'rgba(0,0,0,1)',
                    fontSize:15,
                    stepSize:5,
                      beginAtZero:true
                  }
              }],
              xAxes: [{
                ticks: {
                  fontColor: 'rgba(0,0,0,1)',
                  fontSize:15,
                    beginAtZero:true
                }
            }]
          }
      }

  });


  }
 
}



