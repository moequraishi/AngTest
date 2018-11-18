import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // I broke up the gitApi and query to be separate variables
  // due to future cases of multiple queries
  gitApi = 'https://api.github.com/search/';
  query = 'users?q=';

  constructor(private http: HttpClient) { }

  getUsers(user) {
    return this.http.get(this.gitApi + this.query + user);
  }

  getRepoData(repoUrl) {
    return this.http.get(repoUrl);
  }

  getStarredData(starredUrl) {
    return this.http.get(starredUrl);
  }
}
