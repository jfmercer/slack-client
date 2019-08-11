import { Component } from '@angular/core';
import { SlackService } from '../app/slack.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private auth: object = {};
  private user: object;
  constructor(private slackService: SlackService) {}

  getSlackUser(): void {
    this.slackService.getUserInfo().subscribe(user => this.user = user);
  }
}
