import { Component } from '@angular/core';
import { MoviesDataService } from '../movies-data.service';
import { Film } from '../interfaces/film';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    CarouselModule,
    SliderComponent],

  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  msg:string='12'
  nameparent:string='ahmed'
  Films:Film[] = [];
  pathPrefix:string = "https://image.tmdb.org/t/p/original/";
  constructor(moviesdata: MoviesDataService) {
    moviesdata.getFilms().subscribe((data) => {
      this.Films = data.results;
    })
    console.log(this.Films);
  }

}
