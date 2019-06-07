import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {PostService} from '../../services/post/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit, OnChanges {
  @Input() post: string;

  public viewingPost = false;
  public postInfo: RedditPost = {title: '', url: ''};

  constructor(
      private postService: PostService,
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if (changes.post.currentValue !== undefined) {
      this.viewingPost = true;
      this.postService.getPost(changes.post.currentValue)
          .subscribe((results) => {
            this.postInfo.title = results.data.children[0].data.title;
            this.postInfo.url = results.data.children[0].data.url;
          });
    }
  }

}

export interface RedditPost {
  title: string;
  url: string;
}
