import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoverComponent } from './cover/cover.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { LinksListComponent } from './links-list/links-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CoverComponent,
    ProfilePicComponent,
    LinksListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
