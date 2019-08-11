import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auth } from './auth';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
    return this.http.get<object>(this.USER_API_URL, {params: params});
  }
}
