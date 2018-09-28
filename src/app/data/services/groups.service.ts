import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Environment, Group } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  env: Environment;
  apiUrl: string;
  resource: string;
  username: string;
  group: Group;

  constructor(private httpClient: HttpClient) {
    this.env = environment;
    this.apiUrl = this.env.api.url;
    this.resource = 'group';
    this.username = 'susanna_hayrapetyan';
  }

  async init(): Promise<Group> {

    this.group = await this.httpClient.get<Group>(`${this.apiUrl}/${this.resource}/${this.username}`).toPromise();

    return this.group;
  }

  get(): Group {
    return this.group;
  }

}
