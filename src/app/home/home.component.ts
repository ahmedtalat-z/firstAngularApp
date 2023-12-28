import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userName: string = 'ahmed'
  scrImg: string = ''
  names: string[] = []
  colorgreater:string='green'
  number:number=6
  welcome() {
    window.alert('button is running')

  }
}
