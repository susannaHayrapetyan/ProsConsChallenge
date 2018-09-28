import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { UsersService } from '../services';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class WaitForUserGuard implements CanActivate {

  constructor( private usersService: UsersService ) {}

  async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    // Initialize user data.

    await this.usersService.init();

    const user: User = this.usersService.get();

    return !!user && !!user.userId;
  }
}
