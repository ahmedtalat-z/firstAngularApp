// import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';
import { ContactComponent } from './contact/contact.component';
import {  Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {
    path: 'about', component: AboutComponent},
  {path:'contact',component:ContactComponent},
  {
    path: 'gallery', component: GalleryComponent, children: [
    {path:'',redirectTo:'web',pathMatch:'full'},
    {path:'web',component:WebComponent},
    {path:'mobile',component:MobileComponent}
  ]},
  {path:'**',component:NotFoundComponent},
];


