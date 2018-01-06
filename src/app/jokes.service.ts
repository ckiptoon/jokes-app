import { Joke } from './joke';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from "rxjs/operators";
import { of } from "rxjs/Observable/of";

@Injectable()
export class JokesService {
  private jokesUrl = 'api/jokes';

  constructor(private httpClient: HttpClient) { }

  getJokes(): Observable<Joke[]> {
    return this.httpClient.get<Joke[]>(this.jokesUrl)
      .pipe(
      tap(jokes => console.log(`obtained jokes ${jokes}`)),
      catchError(this.handleError<Joke[]>('error getting list of jokes', []))
      )
  }

  handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(`error message ${error} in ${operation}`)
      return of(result as T);
    }
  }
}
