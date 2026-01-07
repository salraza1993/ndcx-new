export enum PageLayoutEnum {
  Authorized = 'authorized', // Key for authorized layout
  UnAuthorized = 'unauthorized', // Key for unauthorized layout
  Error = 'error', // Key for error layout
  Loading = 'loading' // Key for loading layout
}

export interface LayoutConfig {
  type: PageLayoutEnum;
  showHeader?: boolean;
  showSidebar?: boolean;
  showFooter?: boolean;
  fullScreen?: boolean;
}
