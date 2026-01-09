export interface InitialConfigModel {
  token?: string;
  userInfo: UserInfoModel;
  branding: BrandingModel;
  metaData: MetaDataModel;
  appearance: 'light' | 'dark' | 'system';
}

export interface UserInfoModel {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  roles: string;
}

export interface BrandingModel {
  logo: string[];
  colors: string[];
}

export interface MetaDataModel {
  appName: string;
  appDescription: string;
  appKeywords: string;
}
