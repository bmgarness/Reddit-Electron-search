import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AutocompleteService} from '../../services/autocomplete/autocomplete.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() postSearch = new EventEmitter<string>();

  public autocompleteResults;
  public search: string;

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
      });
  }

  public newPost() {
    this.postSearch.emit(this.search);
  }

  public clicked(search: string) {
    this.search = search;
  }

}
