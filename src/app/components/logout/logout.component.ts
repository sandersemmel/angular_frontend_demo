import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent {

  _authenticationService: AuthenticationService = inject(AuthenticationService);
  _router: Router = inject(Router);

  logout() {
    this._authenticationService.logout();
    this._router.navigate(['/login']);

  }
}
