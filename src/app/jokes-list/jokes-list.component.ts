import { Joke } from './../joke';
import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.css']
})
export class JokesListComponent implements OnInit {
  jokes: Joke[];

  getJokes(): void {
    this.jokesService.getJokes()
      .subscribe(
        jokes => {
            console.log(`all jokes: ${this.jokes}`);
            this.jokes = jokes;
      },
        (err: HttpErrorResponse) =>  {
          console.error(`Error Message: ${err.status} ${err.message}`);
        }
    )
  }

  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.getJokes();
  }

}
