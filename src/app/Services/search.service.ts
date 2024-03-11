import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  readonly URL : string = "127.0.0.1:8000/tmdb/";

  constructor(private httpClient : HttpClient) { }

  getMoviesBySearch(search : string){
    return this.httpClient.get(this.URL + "seachMovie/" + search);
  }

  getSeriesBySearch(){

  }
}
