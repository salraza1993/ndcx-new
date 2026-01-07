// import { authGuard } from "@/core/guards/auth.guard";
// import { isAdminGuard } from "@guards/is-admin.guard";
import { PageLayoutEnum } from '@layouts/enums/PageLayoutEnum';
import { AUTHORIZED_LAYOUT_PROVIDERS } from '@layouts/layout-providers';
import { setLayout } from '@layouts/layout-resolver';
// import { authGuard } from "@/core/guards/auth.guard";

/**
 * Common configuration for all admin routes
 * Includes:
 * - `Authentication guard`
 * - `Admin role guard`
 */
export const ADMIN_ROUTE_CONFIG = {
  // canActivate: [authGuard, isAdminGuard],
  providers: AUTHORIZED_LAYOUT_PROVIDERS,
  resolve: { layout: setLayout(PageLayoutEnum.Authorized) }
};

/**
 * Common configuration for all B2B routes
 * Includes:
 * - `Authentication guard`
 */
export const B2B_ROUTE_CONFIG = {
  // canActivate: [authGuard],
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
