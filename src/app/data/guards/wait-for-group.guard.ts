import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { GroupsService } from '../services';
import { Group } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WaitForGroupGuard implements CanActivate {

  constructor( private groupsService: GroupsService ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    // Initialize group data.

    await this.groupsService.init();

    const group: Group = this.groupsService.get();

    return !!group && !!group.groupId;
  }
}
