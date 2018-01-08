import { Joke } from './../joke';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  @Input() joke: Joke;

  constructor() { }

  ngOnInit() {
  }

}
