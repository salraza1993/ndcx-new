import { Component, inject, linkedSignal } from '@angular/core';
import { AuthServices } from '@auth/services/auth-services';
import { ClientConfigService } from '@client/services/client-config-service';
import { ClientLogo } from '../client-logo/client-logo';
import { AsideMenu } from './aside-menu/aside-menu';

@Component({
  selector: 'app-aside',
  imports: [ClientLogo, AsideMenu],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
  host: {
    class: 'app-aside-host',
    '[class.collapsed]': 'isCollapsed()'
  }
})
export class Aside {
  private _authService = inject(AuthServices);
  private _clientConfigService = inject(ClientConfigService);
  protected readonly isCollapsed = linkedSignal(
    () => this._clientConfigService.getAsideInfo()?.isCollapsed
  );

  signOut(): void {
    this._authService.signOut();
  }

  toggleCollapse(): void {
    this.isCollapsed.update(value => !value);
    this._clientConfigService.setAsideBarConfig(!this.isCollapsed());
  }
}
