import { computed, Injectable, signal } from '@angular/core';
import { LayoutConfig, PageLayoutEnum } from './enums/PageLayoutEnum';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private readonly _currentLayout = signal<LayoutConfig>({
    type: PageLayoutEnum.UnAuthorized,
    showHeader: true,
    showSidebar: true,
    showFooter: true,
    fullScreen: false
  });

  readonly layout = this._currentLayout.asReadonly();
  readonly layoutType = computed(() => this._currentLayout().type);
  readonly isAuthorized = computed(() => this._currentLayout().type === PageLayoutEnum.Authorized);
  readonly isUnAuthorized = computed(
    () => this._currentLayout().type === PageLayoutEnum.UnAuthorized
  );
  readonly isError = computed(() => this._currentLayout().type === PageLayoutEnum.Error);
  readonly showSidebar = computed(() => this._currentLayout().showSidebar ?? false);
  readonly showHeader = computed(() => this._currentLayout().showHeader ?? false);
  readonly showFooter = computed(() => this._currentLayout().showFooter ?? false);
  readonly fullScreen = computed(() => this._currentLayout().fullScreen ?? false);

  setLayout(config: LayoutConfig | PageLayoutEnum): void {
    if (typeof config === 'string') {
      this._currentLayout.update(current => {
        const newLayout = {
          ...current,
          type: config,
          ...this._getDefaultConfig(config)
        };
        return newLayout;
      });
    } else {
      this._currentLayout.set(config);
    }
  }

  private _getDefaultConfig(type: PageLayoutEnum): Partial<LayoutConfig> {
    switch (type) {
      case PageLayoutEnum.Authorized:
        return {
          showHeader: true,
          showSidebar: true,
          showFooter: true,
          fullScreen: false
        };

      case PageLayoutEnum.UnAuthorized:
        return {
          showHeader: false,
          showSidebar: false,
          showFooter: false,
          fullScreen: true
        };
      case PageLayoutEnum.Error:
        return {
          showHeader: false,
          showSidebar: false,
          showFooter: false,
          fullScreen: true
        };
      case PageLayoutEnum.Loading:
        return {
          showHeader: false,
          showSidebar: false,
          showFooter: false,
          fullScreen: true
        };
      default:
        return {};
    }
  }

  updateLayoutConfig(partial: Partial<LayoutConfig>): void {
    this._currentLayout.update(current => ({ ...current, ...partial }));
  }
}
