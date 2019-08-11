import { Component } from '@angular/core';
import { SlackService } from './slack.service';
import { Auth } from './auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private auth: Auth;
  private user: object;
  constructor(private slackService: SlackService) {
    this.auth = new Auth();
  }

  getSlackUser(): void {
    this.slackService.getUserInfo(this.auth).subscribe(user => this.user = user);
  }
}
