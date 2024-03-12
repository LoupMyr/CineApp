import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../Services/search.service";
import {Search} from "../Models/Search";

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public search : string = "";
  public type : string = "";
  public nbPage : number = 1;

  public result: Search = new Search(0, 0, []);

  constructor(private route : ActivatedRoute, private searchService : SearchService) {
  }
  async ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.search = params["search"];
        this.type = params["type"];
        this.nbPage = params["nbPage"];
      }
    );
    if (this.search) {
      switch (this.type) {
        case "movies": {
          this.result = await this.searchService.getMoviesBySearch(this.search, this.nbPage);
          break;
        }
        case "series": {
          this.result = await this.searchService.getSeriesBySearch(this.search, this.nbPage);
          break;
        }
        case "all": {
          this.result = await this.searchService.getMediaBySearch(this.search, this.nbPage);
          break;
        }
      }

    }
  }
}
