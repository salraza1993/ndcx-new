import { authGuard } from '@guards/auth/auth-guard';
import { PageLayoutEnum } from '@layouts/enums/PageLayoutEnum';
import { AUTHORIZED_LAYOUT_PROVIDERS } from '@layouts/layout-providers';
import { setLayout } from '@layouts/layout-resolver';

/**
 * Common configuration for all admin routes
 * Includes:
 * - `Authentication guard`
 * - `Admin role guard`
 */
export const ADMIN_ROUTE_CONFIG = {
  canActivate: [authGuard],
  providers: AUTHORIZED_LAYOUT_PROVIDERS,
  resolve: { layout: setLayout(PageLayoutEnum.Authorized) }
};

/**
 * Common configuration for all B2B routes
 * Includes:
 * - `Authentication guard`
 */
export const AUTHORIZED_ROUTE_CONFIG = {
  canActivate: [authGuard],
  providers: AUTHORIZED_LAYOUT_PROVIDERS,
  resolve: { layout: setLayout(PageLayoutEnum.Authorized) }
};

/**
 * Common configuration for all Search routes
 * Includes:
 * - `Authentication guard`
 */
export const SEARCH_ROUTE_CONFIG = {
  // canActivate: [authGuard],
  providers: AUTHORIZED_LAYOUT_PROVIDERS,
  resolve: { layout: setLayout(PageLayoutEnum.Authorized) }
};
