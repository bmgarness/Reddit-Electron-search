import { Component, OnInit } from '@angular/core';
import {HighlightsService} from '../../services/highlights/highlights.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {

  public highlights: any;

  constructor(
    private highlightsService: HighlightsService,
  ) { }

  ngOnInit() {
    this.highlightsService.grabHighlights()
      .subscribe((results) => {
        this.highlights = {subreddit_names: results.subreddit_names};
      });
  }

}
