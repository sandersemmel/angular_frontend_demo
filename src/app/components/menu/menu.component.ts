import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  _router: Router = inject(Router);

  menuItems: MenuItem[] = [
    { label: "Products", command: () => { this._router.navigate(['products']) } },
    { label: "Checkout", command: () => { this._router.navigate(['checkout']) } },
    { label: "Management", command: () => { this._router.navigate(['management']) } }
  ]
}
