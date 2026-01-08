import { Component } from '@angular/core';
import { AuthAdBanners } from '@auth/components/auth-ad-banners/auth-ad-banners';
import { AuthBackdrop } from '@auth/components/auth-backdrop/auth-backdrop';

@Component({
  selector: 'app-auth-layout',
  imports: [AuthBackdrop, AuthAdBanners],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.css',
  host: { class: 'auth-layout-host' }
})
export class AuthLayout {}
