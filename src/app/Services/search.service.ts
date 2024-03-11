import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Movie} from "../Models/Movie";
import {Genre} from "../Models/Genre";

@Injectable({providedIn: "root"})
export class SearchService {

  private URL : string = "http://127.0.0.1:8000/tmdb/";

  constructor(private httpClient : HttpClient) {}

  getMoviesBySearch(search : string){
    let movies : Movie[] = [];
    const response = this.httpClient.get(this.URL + "searchMovies/" + search);
    response.subscribe(
      result  => {
        let data : any[] = result as Array<any>
        for (const movie of data) {
          let genres : Genre[] = [];
          for (const genre of movie["genres"]) {
            genres.push(new Genre(genre["id"], genre["name"]));
          }
          movies.push(
            new Movie(movie["id"], movie["title"], movie["backdrop_path"], movie["poster_path"], movie["desc"],
              genres, movie["release_date"]
            ));
        }
      }
    );
    return movies;
  }

  getSeriesBySearch(search : string){

  }
}
