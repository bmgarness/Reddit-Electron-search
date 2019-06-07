import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HighlightsService} from '../../services/highlights/highlights.service';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})
export class HighlightsComponent implements OnInit {
  @Output() highlightSearch = new EventEmitter<string>();

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

  public pagelink(search: string) {
    this.highlightSearch.emit(search);
  }

}
