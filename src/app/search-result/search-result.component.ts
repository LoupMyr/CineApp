import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../Services/search.service";
import {Movie} from "../Models/Movie";
import {Media} from "../Models/Media";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public search : string = "";
  public type : string = "";
  public medias : Media[] = [];

  constructor(private route : ActivatedRoute, private searchService : SearchService) {
  }
  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.search = params["search"];
        this.type = params["type"]
      }
    );
    if(this.search){
      switch (this.type){
        case "all": {
          this.medias = this.searchService.getMoviesBySearch(this.search);
          break;
        }
        case "movies": {
          this.medias = this.searchService.getSeriesBySearch(this.search);
          break;
        }
        case "series": {
          this.medias = this.searchService.getMediaBySearch(this.search);
          break;
        }
      }

    }
  }
}
