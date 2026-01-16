import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ClientConfigService } from '../../../../client-configs/services/client-config-service';
import { ClientLogo } from '../client-logo/client-logo';
import { HeaderProfile } from './header-profile/header-profile';
import { HeaderSearch } from './header-search/header-search';
import { HeaderWallet } from "./header-wallet/header-wallet";
import { NotificationButton } from "./notification-button/notification-button";

@Component({
  selector: 'app-header',
  imports: [HeaderSearch, HeaderProfile, ClientLogo, HeaderWallet, NotificationButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-header-host gap-3'
  }
})
export class Header {
  private _clientConfigService = inject(ClientConfigService);
  protected readonly isCollapsed = computed(
    () => this._clientConfigService.getAsideInfo()?.isCollapsed
  );
}
