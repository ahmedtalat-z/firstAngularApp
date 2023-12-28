import { Component } from '@angular/core';
import { MethodsService } from '../methods.service';
@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [],
  templateUrl: './mobile.component.html',
  styleUrl: './mobile.component.css'
})
export class MobileComponent {
  constructor(myMethods:MethodsService) {

    myMethods.mobile()
   }
}
