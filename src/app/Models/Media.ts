import {Genre} from "./Genre";

export abstract class Media {

    private _id : number;

    private _title : string;

    private _backdrop_path : string;

    private _poster_path : string ;

    private _desc : string;

    private _genres : Genre[];

    protected constructor(id : number, title : string, backdrop_path : string, poster_path : string, desc : string, genres : Genre[]) {
      this._id = id;
      this._title = title;
      this._backdrop_path = backdrop_path;
      this._poster_path = poster_path;
      this._desc = desc;
      this._genres = genres;
    }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get backdrop_path(): string {
    return this._backdrop_path;
  }

  set backdrop_path(value: string) {
    this._backdrop_path = value;
  }

  get poster_path(): string {
    return this._poster_path;
  }

  set poster_path(value: string) {
    this._poster_path = value;
  }

  get desc(): string {
    return this._desc;
  }

  set desc(value: string) {
    this._desc = value;
  }

  get genres(): Genre[] {
    return this._genres;
  }

  set genres(value: Genre[]) {
    this._genres = value;
  }
}
