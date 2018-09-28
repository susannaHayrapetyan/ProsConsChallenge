import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Environment, User } from '../models';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  env: Environment;
  apiUrl: string;
  resource: string;
  username: string;
  user: User;

  constructor(private httpClient: HttpClient) {
    this.env = environment;
    this.apiUrl = this.env.api.url;
    this.resource = 'user';
    this.username = 'susanna_hayrapetyan';
  }

  async init(): Promise<User> {

    this.user = await this.httpClient.get<User>(`${this.apiUrl}/${this.resource}/${this.username}`).toPromise();

    return this.user;
  }

  get(): User {
    return this.user;
  }

}
