import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PostProviderService {

  url = 'https://jsonplaceholder.typicode.com/todos';
  constructor(public http: HttpClient) { }

  // obtener datos del API
  getPosts() {
    return new Promise(resolve => {
      this.http.get(this.url).subscribe(data => {
        resolve(data);
      }, error => {
        console.log(error);
      });
    });
  }

  //si hiciera falta meter datos en API propia se hace parecido. Metiendo parámetros en método this.http.post
  addPost(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.url, JSON.stringify(data))
        .subscribe(response => {
          resolve(response);
        }, (error) => {
          reject(error);
        });
    });
  }
}
