import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlackService {

  constructor() { }

  getUserInfo(): object {
    return {
      name: 'John Mercer',
      title: 'Cat Herder'
    };
  }
}
