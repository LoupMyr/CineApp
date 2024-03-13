import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../Services/search.service";
import {Media} from "../Models/Media";
import {Movie} from "../Models/Movie";
import {Serie} from "../Models/Serie";

@Component({
  selector: 'app-detail-media',
  templateUrl: './detail-media.component.html',
  styleUrls: ['./detail-media.component.scss']
})
export class DetailMediaComponent implements OnInit {

  private type : string = "";
  private idMedia : number = 0;
  protected result : Media | undefined;
  protected movie : Movie | undefined;
  protected laSerie : Serie | undefined;

  constructor(private route : ActivatedRoute, private searchService : SearchService) {
  }
  async ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.type = params["type"];
        this.idMedia = params["idMedia"];
      }
    );
    await this.getMediaById();
  }

  async getMediaById(){
    if(this.type == "movie"){
      this.result = await this.searchService.getMovieById(this.idMedia);
    } else {
      this.result = await this.searchService.getSerieById(this.idMedia);
    }
  }

  isMovie(): boolean {
    let isMovie : boolean = false;
    if(Object.getPrototypeOf(this.result) === Movie.prototype){
      isMovie = true;
      // @ts-ignore
      this.movie = this.result;
    } else {
      // @ts-ignore
      this.laSerie = this.result;
    }
    return isMovie;
  }
}
