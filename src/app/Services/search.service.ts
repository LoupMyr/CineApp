import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../Models/Movie";
import {Genre} from "../Models/Genre";
import {Serie} from "../Models/Serie";
import {Saison} from "../Models/Saison";
import {Media} from "../Models/Media";

@Injectable({providedIn: "root"})
export class SearchService {

  private URL: string = "http://127.0.0.1:8000/tmdb/";

  constructor(private httpClient: HttpClient) {
  }

  getMoviesBySearch(search: string): Movie[] {
    let movies: Movie[] = [];
    const response = this.httpClient.get(this.URL + "searchMovies/" + search);
    response.subscribe(
      result => {
        let data: any[] = result as Array<any>
        for (const movie of data) {
          let genres: Genre[] = [];
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

  getSeriesBySearch(search: string): Serie[] {
    let series: Serie[] = [];
    const response = this.httpClient.get(this.URL + "searchSeries/" + search);
    response.subscribe(
      result => {
        let data: any[] = result as Array<any>
        for (const serie of data) {
          let genres: Genre[] = [];
          let seasons: Saison[] = [];
          if (serie["seasons"]) {
            for (const season of serie["seasons"]) {
              seasons.push(new Saison(season["id"], season["name"], season["release_date"], season["episode_count"], season["overview"], season["poster_path"]));
            }
          }
          for (const genre of serie["genres"]) {
            genres.push(new Genre(genre["id"], genre["name"]));
          }
          series.push(
            new Serie(serie["id"], serie["title"], serie["backdrop_path"], serie["poster_path"], serie["desc"],
              genres, seasons, serie["numberEpisodes"], serie["numberSaisons"]
            ));
        }
      }
    );
    return series;
  }

  getMediaBySearch(search: string): Media[] {
    let medias: Media[] = [];
    const response = this.httpClient.get(this.URL + "searchMedia/" + search);
    response.subscribe(
      result => {
        let data: any[] = result as Array<any>
        for (let media of data) {
          let genres: Genre[] = [];
          for (let genre of media["genres"]) {
            genres.push(new Genre(genre["id"], genre["name"]));
          }

          if (media["numberEpisodes"]) {
            const seasons: Saison[] = [];
            if (media["seasons"]) {
              for (const season of media["seasons"]) {
                seasons.push(new Saison(season["id"], season["name"], season["release_date"], season["episode_count"], season["overview"], season["poster_path"]));
              }
            }
            media.push(
              new Serie(media["id"], media["title"], media["backdrop_path"], media["poster_path"], media["desc"],
                genres, seasons, media["numberEpisodes"], media["numberSaisons"]
              ));

          } else {
            medias.push(new Movie(media["id"], media["title"], media["backdrop_path"], media["poster_path"], media["desc"],
              genres, media["release_date"]
            ));
          }

        }
      }
    );
    return medias;
  }
}
