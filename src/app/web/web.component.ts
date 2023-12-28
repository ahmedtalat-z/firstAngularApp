import { Component } from '@angular/core';
import { MethodsService } from '../methods.service';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [],
  templateUrl: './web.component.html',
  styleUrl: './web.component.css'
})
export class WebComponent {
  constructor(myMethods:MethodsService) {
    myMethods.web()
}
}
