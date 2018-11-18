import {Component} from '@angular/core';

// Form control and validators for error handling
import {FormControl, Validators} from '@angular/forms';

// HTTP Service / Client
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  userSearchForm = new FormControl('', [Validators.required]);
  gitHubData: any = {};
  gitRepoData: Object;
  gitStarredData: Object;
  starredUrl: string;

  constructor(
    private httpService: HttpService,
    private http: HttpClient) {}

  getUsers() {
    const user = this.userSearchForm.value;

    const observable = this.httpService.getUsers(user);
    observable.subscribe(data => {
      this.gitHubData = data;

      this.starredUrl = this.gitHubData.items[0].url + '/starred';

      this.getUserInfo(this.gitHubData.items[0].repos_url);
      this.getStarredUrl(this.starredUrl);
    });
  }

  getUserInfo(repoUrl) {
    const observable = this.httpService.getRepoData(repoUrl);
    observable.subscribe(data => {
      this.gitRepoData = data;
    });
  }

  getStarredUrl(starredUrl) {
    const observable = this.httpService.getStarredData(starredUrl);
    observable.subscribe(data => {
      this.gitStarredData = data;
    });
  }

}
