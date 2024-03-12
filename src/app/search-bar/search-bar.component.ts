import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})

export class SearchBarComponent {
  types = [
    {name: 'All', value: 'all'},
    {name: 'Movies', value: 'movies'},
    {name: 'Series', value: 'series'},
  ];

  searchForm = new FormGroup({
    search: new FormControl(),
    types: new FormControl(this.types[0]),
  });


  constructor(private router: Router, private route: ActivatedRoute) {
  }

  onSubmit() {
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate(["/search-result", this.searchForm.get("types")?.value?.value, this.searchForm.get("search")?.value.replace(/\s/g, "%20"), 1])
    });
  }

}
