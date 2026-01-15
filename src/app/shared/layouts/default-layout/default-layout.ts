import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Aside } from '@app/shared/components/aside/aside';
import { Header } from '@app/shared/components/header/header';
import { ClientConfigService } from '../../../../client-configs/services/client-config-service';

@Component({
  selector: 'app-default-layout',
  imports: [Aside, Header],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'default-layout-host',
    // '[style.--aside-width]': "isCollapsed() ? '64px' : 'calc(250px + 1vw)'"
  }
})
export class DefaultLayout {
  private _clientConfigService = inject(ClientConfigService);
  protected readonly isCollapsed = computed(
    () => this._clientConfigService.getAsideInfo()?.isCollapsed
  );
}
