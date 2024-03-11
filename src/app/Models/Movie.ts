import {Media} from "./Media";
import {Genre} from "./Genre";

export class Movie extends Media {

  private _release_date : Date;


  constructor(id: number, title: string, backdrop_path: string, poster_path: string, desc: string, genres: Genre[], release_date: Date) {
    super(id, title, backdrop_path, poster_path, desc, genres);
    this._release_date = release_date;
  }


  get release_date(): Date {
    return this._release_date;
  }

  set release_date(value: Date) {
    this._release_date = value;
  }
}
