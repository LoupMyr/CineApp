import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})

export class SearchComponent {

  searchForm = new FormGroup({
    search: new FormControl(),
  });

  constructor(private router : Router, private route : ActivatedRoute) {}

  onSubmit(event : any){
    let estDejaEnRecherche = false;
    this.route.params.subscribe(
      params => {
        if(params["search"]){
          estDejaEnRecherche = true;
        }
      }
    );
    if(estDejaEnRecherche){
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(["/search-result",this.searchForm.get("search")?.value])});
    } else {
      this.router.navigate(["/search-result",this.searchForm.get("search")?.value]);
    }
  }

}
