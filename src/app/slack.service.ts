import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Auth } from './auth';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SlackService {
  readonly USER_API_URL: string = 'https://slack.com/api/users.info';

  constructor(private http: HttpClient) { }

  getUserInfo(auth: Auth): Observable<object> {
    const params = new HttpParams()
                     .set('token', auth.token)
                     .set('user', auth.id);
    return this.http.get<object>(this.USER_API_URL, {params: params})
      .pipe(
        retry(1),
        catchError(this.handleError<object>('getUserInfo', {}))
      );
  }

  // NOTE: Taken from https://angular.io/tutorial/toh-pt6
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
}
}
