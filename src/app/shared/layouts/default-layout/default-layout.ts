import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DOCUMENT,
  effect,
  inject
} from '@angular/core';
import { Aside } from '@app/shared/components/aside/aside';
import { Header } from '@app/shared/components/header/header';
import { ClientConfigService } from '../../../../client-configs/services/client-config-service';

@Component({
  selector: 'app-default-layout',
  imports: [Aside, Header],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'default-layout-host' }
})
export class DefaultLayout {
  private readonly _document = inject(DOCUMENT);
  private readonly _rootElement = this._document.documentElement as HTMLElement;
  private _clientConfigService = inject(ClientConfigService);
  protected readonly isCollapsed = computed(
    () => this._clientConfigService.getAsideInfo()?.isCollapsed
  );

  private _asideEffect = effect(() => {
    const value = this.isCollapsed();
    this._rootElement.setAttribute('aside-collapsed', value ? 'true' : 'false');
  });
}
