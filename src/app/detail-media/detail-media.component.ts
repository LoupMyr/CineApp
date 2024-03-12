import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SearchService} from "../Services/search.service";
import {Media} from "../Models/Media";

@Component({
  selector: 'app-detail-media',
  templateUrl: './detail-media.component.html',
  styleUrls: ['./detail-media.component.css']
})
export class DetailMediaComponent implements OnInit {

  private type : string = "";
  private idMedia : number = 0;
  protected result : Media | undefined;
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
}
