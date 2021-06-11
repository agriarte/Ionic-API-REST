import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PostProviderService } from '../services/postprovider.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  arrayPosts: any; //Creamos la variable donde guardaremos los datos que nos retorna el servicio
  verLista: boolean; //conmutador para ver/ocultar lista

  constructor(public navCtrl: NavController, public postProvider: PostProviderService) {
    this.verLista = false; //inicialmente no se muestra la lista
  }

  // ??? lifecycle , ionic tiene otros métodos
  // ionViewDidEnter() {
  //   this.getPost();//Llamamos a la función getPost cuando la vista se cargue
  // }

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.getPost();//Llamamos a la función getPost cuando la vista se cargue
  }

  getPost() {
    this.postProvider.getPosts()
      .then(data => {
        this.arrayPosts = data;
      });
  }


}
