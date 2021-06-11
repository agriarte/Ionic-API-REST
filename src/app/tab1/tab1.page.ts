import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostProviderService } from '../services/postprovider.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  arrayPosts: any; //Creamos la variable donde guardaremos los datos que nos retorna el servicio

  constructor(public navCtrl: NavController, public postProvider: PostProviderService) { }

  ionViewDidEnter() {
    this.getPost();//Llamamos a la función getPost cuando la vista se cargue
  }

  getPost() {
    this.postProvider.getPosts()
      .then(data => {
        this.arrayPosts = data;
      });
  }

}
