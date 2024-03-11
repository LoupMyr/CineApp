import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../Services/search.service";
import {Movie} from "../Models/Movie";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public search : string = "";
  public movies : Movie[] = [];

  constructor(private route : ActivatedRoute, private searchService : SearchService) {
  }
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.search = params["search"];
      }
    );
    this.movies = this.searchService.getMoviesBySearch(this.search);
  }
}
