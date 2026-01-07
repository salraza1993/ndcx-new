import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { LayoutConfig, PageLayoutEnum } from '@layouts/enums/PageLayoutEnum';
import { LayoutService } from '@layouts/layout.service';

/**
 * Resolver sets the page layout type,
 * ensuring that the layout is available before navigating to the component.
 **/
export const setLayout = (config: LayoutConfig | PageLayoutEnum): ResolveFn<void> => {
  return () => {
    const layoutService = inject(LayoutService);
    layoutService.setLayout(config);
  };
};

export const setAuthorizedLayout = (): ResolveFn<void> => setLayout(PageLayoutEnum.Authorized);
export const setUnAuthorizedLayout = (): ResolveFn<void> => setLayout(PageLayoutEnum.UnAuthorized);
export const setErrorLayout = (): ResolveFn<void> => setLayout(PageLayoutEnum.Error);
export const setLoadingLayout = (): ResolveFn<void> => setLayout(PageLayoutEnum.Loading);
