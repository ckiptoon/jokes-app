import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { JokesWebApiService } from "./jokes-web-api";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { JokesListComponent } from './jokes-list/jokes-list.component';
import { JokeComponent } from './joke/joke.component';
import { JokesService } from './jokes.service';
import { AddJokeComponent } from './add-joke/add-joke.component';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JokesListComponent,
    JokeComponent,
    AddJokeComponent,
    FavoriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(JokesWebApiService, { dataEncapsulation: false })
  ],
  entryComponents:[AddJokeComponent],
  
  providers: [JokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
