import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-auth-ad-banners',
  imports: [],
  templateUrl: './auth-ad-banners.html',
  styleUrl: './auth-ad-banners.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthAdBanners {
  protected banners = signal([
    'banners/1.png',
    'banners/2.png',
    'banners/3.png',
    'banners/4.png',
    'banners/5.png',
    'banners/6.png',
    'banners/7.png',
    'banners/8.png',
    'banners/9.png',
    'banners/10.png',
    'banners/11.png',
    'banners/12.png',
    'banners/13.png'
  ]);
}
