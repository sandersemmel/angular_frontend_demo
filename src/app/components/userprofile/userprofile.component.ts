import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html'
})
export class UserprofileComponent {
  authenticationService: AuthenticationService = inject(AuthenticationService);
  _router: Router = inject(Router);
}
