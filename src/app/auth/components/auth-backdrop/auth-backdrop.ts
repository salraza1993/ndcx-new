import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { environment } from '@env/environment.development';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-auth-backdrop',
  imports: [],
  templateUrl: './auth-backdrop.html',
  styleUrl: './auth-backdrop.css'
})
export class AuthBackdrop implements OnInit {
  // protected bannerList = [
  //   {
  //     slides: [
  //       'banners/1.png',
  //       'banners/2.png',
  //       'banners/3.png',
  //       'banners/4.png',
  //       'banners/5.png',
  //       'banners/6.png',
  //       'banners/7.png',
  //       'banners/8.png',
  //       'banners/9.png',
  //       'banners/10.png',
  //       'banners/11.png',
  //       'banners/12.png',
  //       'banners/13.png',
  //     ]
  //   },
  //   {
  //     slides: [
  //       'banners/13.png',
  //       'banners/12.png',
  //       'banners/11.png',
  //       'banners/10.png',
  //       'banners/9.png',
  //       'banners/8.png',
  //       'banners/7.png',
  //       'banners/6.png',
  //       'banners/5.png',
  //       'banners/4.png',
  //       'banners/3.png',
  //       'banners/2.png',
  //       'banners/1.png',
  //     ]
  //   },
  //   {
  //     slides: [
  //       'banners/1.png',
  //       'banners/2.png',
  //       'banners/3.png',
  //       'banners/4.png',
  //       'banners/5.png',
  //       'banners/6.png',
  //       'banners/7.png',
  //       'banners/8.png',
  //       'banners/9.png',
  //       'banners/10.png',
  //       'banners/11.png',
  //       'banners/12.png',
  //       'banners/13.png',
  //     ]
  //   },
  // ];
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
    'banners/10.png',
  ];
  protected bannerList = this.originalList;
  private readonly _http = inject(HttpClient);
  private async fetchBanners() {
    const result = await firstValueFrom(this._http.get(environment.GET_BANNERS_API));
    return result;
  }
  protected bannersArray(reverse = false) {
    return reverse ? [...this.bannerList].reverse() : this.bannerList;
  }

  shuffleArray(array: string[]): string[] {
    let currentIndex = array.length;
    let randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return this.bannerList;
  }

  ngOnInit() {
    setTimeout(() => {
      this.shuffleArray(this.originalList);
    }, 1000);
  }
}
