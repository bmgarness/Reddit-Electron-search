import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './views/post/post.component';
import { SearchComponent } from './views/search/search.component';
import { HighlightsComponent } from './views/highlights/highlights.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import {NgxSelectModule} from 'ngx-select-ex';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SearchComponent,
    HighlightsComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxSelectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
