import {Component, OnInit} from '@angular/core';
import {SearchService} from "../../Services/search.service";
import {Movie} from "../../Models/Movie";
import {Media} from "../../Models/Media";
import {Serie} from "../../Models/Serie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-filmspopular',
  templateUrl: './filmspopular.component.html',
  styleUrls: ['./filmspopular.component.scss']
})
export class FilmspopularComponent implements OnInit {

  moviesPopular: Movie[] = [];

  constructor(private searchService : SearchService, private router : Router) {
  }

  async ngOnInit() {
    this.moviesPopular = await this.searchService.getPopularMovies();
  }

  redirectToDetailRoute(movie : Movie){
    let type : string = "movie";
    if(Object.getPrototypeOf(movie) === Serie.prototype){
      type = "serie";
    }
    this.router.navigate(["/detail-media", type, movie.id])
  }
}
