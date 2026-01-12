import { bootstrapApplication } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';
import { App } from './app/app';
import { appConfig } from './app/app-configs/app.config';

bootstrapApplication(App, appConfig)
  .then(() => {
    appPreLoader();
  })
  .catch(err => console.error(err));

// Register Swiper custom elements
register();
const appPreLoader = (): void => {
  const loader = document.querySelector('#app-pre-loader');
  if (loader) {
    loader.remove();
  }
};
