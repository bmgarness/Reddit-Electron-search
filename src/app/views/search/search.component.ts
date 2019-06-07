import { Component, OnInit } from '@angular/core';
import {AutocompleteService} from '../../services/autocomplete/autocomplete.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public autocompleteResults;

  constructor(
    private autocompleteService: AutocompleteService,
  ) { }

  ngOnInit() {
  }

  public startAutocomplete(search: string) {
    this.autocompleteService.getAutocomplete(search)
      .subscribe((results: any) => {
        this.autocompleteResults = results.data.children.map((object: any) => {
          return object.data.display_name_prefixed;
        });
        console.log(this.autocompleteResults);
      });
  }

}
