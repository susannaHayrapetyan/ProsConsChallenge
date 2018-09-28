import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { GroupsService } from './';
import { UsersService } from './';

import { environment } from '../../../environments/environment';
import { Environment, Group, User, ProsCons } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProsConsService {
  env: Environment;
  apiUrl: string;
  resource: string;

  constructor(
    private httpClient: HttpClient,
    private groupsService: GroupsService,
    private usersService: UsersService,
    ) {

    this.env = environment;
    this.apiUrl = this.env.api.url;
    this.resource = 'proscons';
  }

  get(): Observable<ProsCons> {
    const group: Group = this.groupsService.get();
    const user: User = this.usersService.get();

    return this.httpClient.get<ProsCons>(`${this.apiUrl}/${this.resource}/group/${group.groupId}/user/${user.userId}`);
  }

  update(prosCons): Observable<ProsCons> {
    const group: Group = this.groupsService.get();
    const user: User = this.usersService.get();

    return this.httpClient.put<ProsCons>(`${this.apiUrl}/${this.resource}/group/${group.groupId}/user/${user.userId}`, prosCons);
  }
}
