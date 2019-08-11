import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Auth } from './auth';

@Injectable({
  providedIn: 'root'
})
export class SlackService {

  constructor() { }

  getUserInfo(auth: Auth): Observable<object> {
    return of({
      name: 'John Mercer',
      title: 'Cat Herder'
    });
  }
}
