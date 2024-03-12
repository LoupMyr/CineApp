import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SearchService} from "../Services/search.service";
import {Search} from "../Models/Search";
import {Media} from "../Models/Media";
import {Serie} from "../Models/Serie";

@Component({
  selector: 'app-search-bar-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public search: string = "";
  public type: string = "";
  public nbPage: number = 1;

  public result: Search = new Search(0, 0, []);

  constructor(private route: ActivatedRoute, private searchService: SearchService, private router : Router) {
  }

  async ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.search = params["search"];
        this.type = params["type"];
        this.nbPage = params["nbPage"];
      }
    );
    await this.getBySearch();
  }

  async getBySearch() {
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

  async incrementPage(){
    if(this.nbPage < this.result.total_pages){
      this.nbPage++;
      this.reloadPage();
    }
  }

  async decrementPage(){
    if(this.nbPage > 1){
      this.nbPage--;
      this.reloadPage();
    }
  }
  reloadPage(){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(["/search-result", this.type, this.search, this.nbPage])
    });
  }

  redirectToDetailRoute(media : Media){
    let type : string = "movie";
    if(Object.getPrototypeOf(media) === Serie.prototype){
      type = "serie";
    }
    this.router.navigate(["/detail-media", type, media.id])
  }
}

