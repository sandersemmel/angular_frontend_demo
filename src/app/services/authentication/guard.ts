// auth.guard.ts
import { Injectable, inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class Guard implements CanActivate {

  authenticationService = inject(AuthenticationService);
  router = inject(Router);

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.authenticationService.$isLoggedIn().isLoggedin) {
      return true;
    } else {
      // Redirect to login page or any other page
      this.router.navigate(['/login']);
      return false;
    }
  }
}