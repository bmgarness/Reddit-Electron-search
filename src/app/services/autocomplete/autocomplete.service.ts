import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService {

  constructor(
    private http: HttpClient,
  ) { }

  public getAutocomplete(query: string): Observable<any> {
    return this.http.get('http://www.reddit.com/api/subreddit_autocomplete_v2.json?' +
      '&include_over_18=false&include_profiles=false&query=' + query);
  }
}
