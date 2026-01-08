import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app-configs/app.config';
import { App } from './app/app';
import { register } from 'swiper/element/bundle';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

  // Register Swiper custom elements
register();
