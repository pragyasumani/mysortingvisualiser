import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { AppComponent } from './app.component';
import { SortingComponent } from './sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
