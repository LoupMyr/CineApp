import {Media} from "./Media";
import {Saison} from "./Saison";
import {Genre} from "./Genre";

export class Serie extends Media {
  private _seasons: Saison[];

  private _numberEpisodes: number;

  private _numberSaisons: number;


  constructor(id: number, title: string, backdrop_path: string, poster_path: string, desc: string, genres: Genre[], seasons: Saison[], numberEpisodes: number, numberSaisons: number) {
    super(id, title, backdrop_path, poster_path, desc, genres);
    this._seasons = seasons;
    this._numberEpisodes = numberEpisodes;
    this._numberSaisons = numberSaisons;
  }


  get seasons(): Saison[] {
    return this._seasons;
  }

  set seasons(value: Saison[]) {
    this._seasons = value;
  }

  get numberEpisodes(): number {
    return this._numberEpisodes;
  }

  set numberEpisodes(value: number) {
    this._numberEpisodes = value;
  }

  get numberSaisons(): number {
    return this._numberSaisons;
  }

  set numberSaisons(value: number) {
    this._numberSaisons = value;
  }
}
