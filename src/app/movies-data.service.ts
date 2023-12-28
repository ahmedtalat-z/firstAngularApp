import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private httpClient: HttpClient) { }

  getFilms():Observable<any> {
    return this.httpClient.get("https://api.themoviedb.org/3/movie/top_rated?api_key=7b6a73b9cd1ae0ed48b123eb2e041867")
  }
 }
