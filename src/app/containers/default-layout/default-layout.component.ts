import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit {
  public newPost: string;

  constructor() { }

  ngOnInit() {
  }

  public posted(search: string) {
    this.newPost = search;
  }
}
