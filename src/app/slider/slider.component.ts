import { Component, Input, Output ,EventEmitter, OnInit} from '@angular/core';
import { Film } from '../interfaces/film';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import EventEmitter from 'events';



@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CarouselModule,CommonModule,RouterModule ],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})

export class SliderComponent implements OnInit {
  pathPrefix:string = "https://image.tmdb.org/t/p/original/";
  @Input() name: string = ''
  @Output() theOut = new EventEmitter<string>()
  mesgFromChild() {
    this.theOut.emit('B3rd Aflam')
  }
  @Input() topTrending: Film[] = []
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
constructor(){
// this.mesgFromChild()
}
  ngOnInit(): void {
    this.mesgFromChild()
  }
}
