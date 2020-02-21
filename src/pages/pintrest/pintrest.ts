import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { HttpClient} from '@angular/common/http';


@IonicPage()
@Component({
  selector: 'page-pintrest',
  templateUrl: 'pintrest.html',
})
export class PintrestPage {
  
  imageList=[];
  nextPage='https://picsum.photos/v2/list';

  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient, public toastController: ToastController) {
    this.loadImages();
  }

 
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad PintrestPage');
  }
  loadImages(){
   
     this.http.get<any[]>(this.nextPage, {observe:'response'}).subscribe(res =>
      {
        console.log('res:',res);
        console.log(this.parse_link_header(res.headers.get('link')));
        this.nextPage=this.parse_link_header(res.headers.get('link'))['next'];
        this.imageList=this.imageList.length==0 ? res.body : [...this.imageList,res.body ];
      })
  }
  private parse_link_header(header) {
    if (header.length == 0) {
      return ;
    }

    let parts = header.split(',');
    var links = {};
    parts.forEach( p => {
      let section = p.split(';');
      var url = section[0].replace(/<(.*)>/, '$1').trim();
      var name = section[1].replace(/rel="(.*)"/, '$1').trim();
      links[name] = url;

    });
    return links;
  }  
  pinn(){
    const toast = this.toastController.create({
      message: 'Image saved',
      duration: 2000,
    });
    toast.present();
  }

}
