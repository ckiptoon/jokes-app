import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { JokesWebApi } from "./jokes-web-api";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { JokesListComponent } from './jokes-list/jokes-list.component';
import { JokeComponent } from './joke/joke.component';
import { JokesService } from './jokes.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JokesListComponent,
    JokeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(JokesWebApi, { dataEncapsulation: false })
  ],
  providers: [JokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
