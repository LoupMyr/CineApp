export class Saison {
  private _id : number ;

  private _name : string;

  private _release_date : Date;

  private _episode_count : number;

  private _overview : string;

  private _poster_path : string;


  constructor(id: number, name: string, release_date: Date, episode_count: number, overview: string, poster_path: string) {
    this._id = id;
    this._name = name;
    this._release_date = release_date;
    this._episode_count = episode_count;
    this._overview = overview;
    this._poster_path = poster_path;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get release_date(): Date {
    return this._release_date;
  }

  set release_date(value: Date) {
    this._release_date = value;
  }

  get episode_count(): number {
    return this._episode_count;
  }

  set episode_count(value: number) {
    this._episode_count = value;
  }

  get overview(): string {
    return this._overview;
  }

  set overview(value: string) {
    this._overview = value;
  }

  get poster_path(): string {
    return this._poster_path;
  }

  set poster_path(value: string) {
    this._poster_path = value;
  }
}
