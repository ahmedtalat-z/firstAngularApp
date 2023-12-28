import { Injectable } from '@angular/core';
import { log } from 'console';



@Injectable({
  providedIn: 'root'
})
export class MethodsService {

  welcome() {
    window.alert('welcome ya 5oya ')
  }
  web() {
    window.alert('welcome ya 5oya in web section ')
  }
  mobile() {
    window.alert('welcome ya 5oya in mobile section ')
  }


  constructor() { }
}
