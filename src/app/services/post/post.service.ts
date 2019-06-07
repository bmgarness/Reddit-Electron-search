import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
      private http: HttpClient,
  ) { }

  public getPost(subreddit: string): Observable<any> {
    return this.http.get('http://www.reddit.com/' + subreddit + '/new.json?limit=1');
  }
}
