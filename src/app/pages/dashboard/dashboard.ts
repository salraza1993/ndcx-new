import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AuthServices } from '../../auth/services/auth-services';

@Component({
  selector: 'app-dashboard',
  imports: [InputTextModule, ButtonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  private _authServices = inject(AuthServices);
  signOut(): void {
    this._authServices.signOut();
  }
}
