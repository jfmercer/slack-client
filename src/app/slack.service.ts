import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlackService {

  constructor() { }

  getUserInfo(): Observable<object> {
    return of({
      name: 'John Mercer',
      title: 'Cat Herder'
    });
  }
}
