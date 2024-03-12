import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Movie} from "../Models/Movie";
import {Genre} from "../Models/Genre";
import {Serie} from "../Models/Serie";
import {Saison} from "../Models/Saison";
import {Media} from "../Models/Media";
import {Search} from "../Models/Search";

@Injectable({providedIn: "root"})
export class SearchService {

  private URL: string = "http://127.0.0.1:8000/tmdb/";

  constructor(private httpClient: HttpClient) {
  }

  async getMoviesBySearch(search: string, nbPage: number): Promise<Search> {
    let movies: Movie[] = [];
    let result: Search = new Search(0, 0, []);
    await this.httpClient.get(`${this.URL}searchMovies/${search}/${nbPage}`
    ).forEach(
      response => {
        let data: any[] = response as any[];
        // @ts-ignore
        let total_pages: number = data["total_pages"];
        // @ts-ignore
        let total_results: number = data["total_results"];
        // @ts-ignore
        for (const movie of data["medias"]) {
          let genres: Genre[] = [];
          for (const genre of movie["genres"]) {
            genres.push(new Genre(genre["id"], genre["name"]));
          }
          movies.push(
            new Movie(movie["id"], movie["title"], movie["backdrop_path"], movie["poster_path"], movie["desc"],
              genres, movie["release_date"]
            ));
        }
        result = new Search(total_pages, total_results, movies);
      }
    );
    return result;
  }

  async getSeriesBySearch(search: string, nbPage: number): Promise<Search> {
    let series: Serie[] = [];
    let result: Search = new Search(0, 0, []);
    await this.httpClient.get(this.URL + "searchSeries/" + search + "/" + nbPage).forEach(
      response => {
        let data: any[] = response as any[];
        // @ts-ignore
        let total_pages: number = data["total_pages"];
        // @ts-ignore
        let total_results: number = data["total_results"];
        // @ts-ignore
        for (const serie of data["medias"]) {
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
        result = new Search(total_pages, total_results, series);
      }
    );
    return result;
  }

  async getMediaBySearch(search: string, nbPage: number): Promise<Search> {
    let medias: Media[] = [];
    let result: Search = new Search(0, 0, []);
    await this.httpClient.get(this.URL + "searchMedia/" + search + "/" + nbPage).forEach(
      response => {
        let data: any[] = response as any[];
        // @ts-ignore
        let total_pages: number = data["total_pages"];
        // @ts-ignore
        let total_results: number = data["total_results"];
        // @ts-ignore
        for (const media of data["medias"]) {
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
        result = new Search(total_pages, total_results, medias);
      }
    );
    return result;
  }

  async getMovieById(idMedia: number) {
    let result: Movie = new Movie(0, "", "", "", "", [], new Date());
    await this.httpClient.get(`${this.URL}getMovieById/${idMedia}`
    ).forEach(
      response => {
        let movie: any[] = response as any[];
        let genres: Genre[] = [];
        // @ts-ignore
        for (const genre of movie["genres"]) {
          genres.push(new Genre(genre["id"], genre["name"]));
        }
        // @ts-ignore
        result = new Movie(movie["id"], movie["title"], movie["backdrop_path"], movie["poster_path"], movie["desc"], genres, movie["release_date"]
        );
      });
    return result;
  }

  async getSerieById(idMedia: number) {
    let result : Serie = new Serie(0, "", "", "", "",
      [], [], 0, 0);
    await this.httpClient.get(`${this.URL}getSerieById/${idMedia}`
    ).forEach(
      response => {
        let serie: any[] = response as any[];
        let genres: Genre[] = [];
        let seasons: Saison[] = [];
        // @ts-ignore
        if (serie["seasons"]) {
          // @ts-ignore
          for (const season of serie["seasons"]) {
            seasons.push(new Saison(season["id"], season["name"], season["release_date"], season["episode_count"], season["overview"], season["poster_path"]));
          }
        }
        // @ts-ignore
        for (const genre of serie["genres"]) {
          genres.push(new Genre(genre["id"], genre["name"]));
        }
        // @ts-ignore
        result = new Serie(serie["id"], serie["title"], serie["backdrop_path"], serie["poster_path"], serie["desc"], genres, seasons, serie["numberEpisodes"], serie["numberSaisons"]
        );
      });
    return result;
  }
}
