import { computed, Injectable, signal } from '@angular/core';
import { LayoutConfig, PageLayoutEnum } from './enums/PageLayoutEnum';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private readonly currentLayout = signal<LayoutConfig>({
    type: PageLayoutEnum.UnAuthorized,
    showHeader: true,
    showSidebar: true,
    showFooter: true,
    fullScreen: false
  });

  readonly layout = this.currentLayout.asReadonly();
  readonly layoutType = computed(() => this.currentLayout().type);
  readonly isAuthorized = computed(() => this.currentLayout().type === PageLayoutEnum.Authorized);
  readonly isUnAuthorized = computed(
    () => this.currentLayout().type === PageLayoutEnum.UnAuthorized
  );
  readonly isError = computed(() => this.currentLayout().type === PageLayoutEnum.Error);
  readonly showSidebar = computed(() => this.currentLayout().showSidebar ?? false);
  readonly showHeader = computed(() => this.currentLayout().showHeader ?? false);
  readonly showFooter = computed(() => this.currentLayout().showFooter ?? false);
  readonly fullScreen = computed(() => this.currentLayout().fullScreen ?? false);

  setLayout(config: LayoutConfig | PageLayoutEnum): void {
    if (typeof config === 'string') {
      this.currentLayout.update(current => {
        const newLayout = {
          ...current,
          type: config,
          ...this._getDefaultConfig(config)
        };
        return newLayout;
      });
    } else {
      this.currentLayout.set(config);
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
    this.currentLayout.update(current => ({ ...current, ...partial }));
  }
}
