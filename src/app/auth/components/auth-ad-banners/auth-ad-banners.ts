import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { GenerateUniqueId } from '../../../shared/helpers/uniqueIdGenerator';

@Component({
  selector: 'app-auth-ad-banners',
  imports: [],
  templateUrl: './auth-ad-banners.html',
  styleUrl: './auth-ad-banners.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthAdBanners {
  protected banners = signal<{ id: string; desktop: string; mobile: string }[]>([
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/1.png',
      mobile: 'banners/1-tab.png'
    },
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/2.png',
      mobile: 'banners/2-tab.png'
    },
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/3.png',
      mobile: 'banners/3-tab.png'
    },
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/4.png',
      mobile: 'banners/4-tab.png'
    },
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/5.png',
      mobile: 'banners/5-tab.png'
    },
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/6.png',
      mobile: 'banners/6-tab.png'
    },
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/7.png',
      mobile: 'banners/7-tab.png'
    },
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/8.png',
      mobile: 'banners/8-tab.png'
    },
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/9.png',
      mobile: 'banners/9-tab.png'
    },
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/10.png',
      mobile: 'banners/10-tab.png'
    },
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/11.png',
      mobile: 'banners/11-tab.png'
    },
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/12.png',
      mobile: 'banners/12-tab.png'
    },
    {
      id: GenerateUniqueId(8),
      desktop: 'banners/13.png',
      mobile: 'banners/13-tab.png'
    }
  ]);
}
