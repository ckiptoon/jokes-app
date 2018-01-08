import { Joke } from './joke';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from "rxjs/operators";
import { of } from "rxjs/observable/of";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class JokesService {
  private jokesUrl = 'api/jokes';

  constructor(private httpClient: HttpClient) { }

  getJokes(): Observable<Joke[]> {
    return this.httpClient.get<Joke[]>(this.jokesUrl)
      .pipe(
      tap(jokes => console.log('obtained jokes', jokes)),
      catchError(this.handleError<Joke[]>('error getting list of jokes', []))
      )
  }

  getJoke(id: number): Observable<Joke> {
    const url = `${this.jokesUrl}/${id}`;

    return this.httpClient.get<Joke>(url)
      .pipe(
      tap(() => {
        console.log('got this joke successfully');
      }),
      catchError(this.handleError<Joke>('error getting this joke', null))
      )
  }

  updateJoke(joke: Joke): Observable<any> {
    const url = `${this.jokesUrl}/${joke.id}`;

    return this.httpClient.put<Joke>(url, joke, httpOptions)
      .pipe(
      tap(joke => {
        console.log('updated the joke: ', joke);
      }),
      catchError(this.handleError<Joke>('updated successfully', null))
      )
  }

  saveJoke(joke: Joke): Observable<Joke> {

    return this.httpClient.post<Joke>(this.jokesUrl, joke, httpOptions)
      .pipe(
      tap(joke => {
        console.log('saved successfully: ', joke);
      }),
      catchError(this.handleError<Joke>("saved joke", null))
      )
  }

  deleteJoke(joke: Joke): Observable<Joke> {
    const url = `${this.jokesUrl}/${joke.id}`;

    return this.httpClient.delete<Joke>(url, httpOptions)
      .pipe(
        tap(joke => {
          console.log('Deleted this joke: ', joke)
        }),
        catchError(this.handleError<Joke>("deleted failed", null))
      )
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(`error message ${error} in ${operation}`)
      return of(result as T);
    }
  }
}
