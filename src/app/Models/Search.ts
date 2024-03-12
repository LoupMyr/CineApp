import {Media} from "./Media";

export class Search {
  private _total_pages : number;

  private _total_results : number;

  private _medias : Media[];


  constructor(total_pages: number, total_results: number, medias: Media[]) {
    this._total_pages = total_pages;
    this._total_results = total_results;
    this._medias = medias;
  }


  get total_pages(): number {
    return this._total_pages;
  }

  set total_pages(value: number) {
    this._total_pages = value;
  }

  get total_results(): number {
    return this._total_results;
  }

  set total_results(value: number) {
    this._total_results = value;
  }

  get medias(): Media[] {
    return this._medias;
  }

  set medias(value: Media[]) {
    this._medias = value;
  }
}
