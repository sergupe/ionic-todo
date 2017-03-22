import { Component } from '@angular/core';
import { NavParams, ViewController, AlertController } from 'ionic-angular';

/*
  Generated class for the ItemDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  title;
  description;

  constructor(public navParams: NavParams, public view: ViewController, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
  	this.title = this.navParams.get('item').title;
  	this.description = this.navParams.get('item').description;
  }

  /*
  Posteriormente va a ser el metodo de borrado de la tarea
  */
  close(){
  	this.view.dismiss();
  }

  deleteTask(){
  	
  }

  /*
  Para que aparezca confirmacion al solicitar el borrado de la tarea
  */
  confirmDelete() {
    let confirm = this.alertCtrl.create({
      title: 'Delete Task',
      message: 'Are you sure you want to delete this task?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            this.close();
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.close();
          }
        }
      ]
    });
    confirm.present();
  }

}
