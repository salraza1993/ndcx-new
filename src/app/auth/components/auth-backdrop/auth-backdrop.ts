import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-auth-backdrop',
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './auth-backdrop.html',
  styleUrl: './auth-backdrop.css'
})
export class AuthBackdrop {
  protected originalList = [
    'banners/1.png',
    'banners/2.png',
    'banners/3.png',
    'banners/4.png',
    'banners/5.png',
    'banners/6.png',
    'banners/7.png',
    'banners/8.png',
    'banners/9.png',
    'banners/10.png'
  ];
  protected bannerList = this.originalList;
  protected bannersArray(reverse = false) {
    return reverse ? [...this.bannerList].reverse() : this.bannerList;
  }
}
