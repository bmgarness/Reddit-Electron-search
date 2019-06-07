import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HighlightsService {

  constructor(
    private http: HttpClient
  ) { }

  public grabHighlights(): Observable<any> {
    return this.http.get('http://www.reddit.com/api/trending_subreddits.json');
  }
}
