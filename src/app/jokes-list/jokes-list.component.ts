import { AddJokeComponent } from './../add-joke/add-joke.component';
import { Joke } from './../joke';
import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from "@angular/material";

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.css']
})
export class JokesListComponent implements OnInit {
  jokes: Joke[];

  constructor(private jokesService: JokesService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getJokes();
  }

  //MODAL
  addNewDialog() {
    let newJoke = new Joke(0, 'New Joke Title', 'Punchline!');

    let dialogRef = this.dialog.open(AddJokeComponent, {
      width: '400px',
      data: { newJoke, text: 'Example Text CKK!' }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed:', result);

    })
  }



  //CRUD
  getJokes(): void {
    this.jokesService.getJokes()
      .subscribe(
      jokes => {
        console.log(`all jokes: ${this.jokes}`);
        this.jokes = jokes;
      },
      (err: HttpErrorResponse) => {
        console.error(`Error Message: ${err.status} ${err.message}`);
      }
      )
  }

}
