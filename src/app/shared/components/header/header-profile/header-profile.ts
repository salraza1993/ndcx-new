import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AuthServices } from '@auth/services/auth-services';
import { ClientConfigService } from '@client/services/client-config-service';
import { MenuItem } from 'primeng/api';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-header-profile',
  imports: [SplitButtonModule],
  templateUrl: './header-profile.html',
  styleUrl: './header-profile.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderProfile {
  private _authService = inject(AuthServices);
  private _clientConfigService = inject(ClientConfigService);
  protected userInfo = this._clientConfigService.getUserInfo();

  protected items = signal<MenuItem[]>([
    {
      label: 'My Profile',
      icon: 'pi pi-user',
      routerLink: ['/my-profile']
    },
    {
      label: 'Change Password',
      icon: 'pi pi-lock',
      routerLink: ['/change-password']
    },
    {
      label: 'Settings',
      icon: 'pi pi-cog',
      routerLink: ['/settings']
    },
    { separator: true },
    {
      label: 'Sign Out',
      icon: 'pi pi-sign-out',
      command: () => this.signOut()
    }
  ]);

  signOut(): void {
    this._authService.signOut();
  }
}
