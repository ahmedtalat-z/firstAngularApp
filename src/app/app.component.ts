import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesDataService } from './movies-data.service';
import { MethodsService } from './methods.service';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  standalone: true,
  providers:[MoviesDataService,MethodsService,DataService],
  imports: [CommonModule,HttpClientModule, RouterOutlet,HomeComponent,NavbarComponent,FooterComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstApp';
}
