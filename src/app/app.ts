import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutService } from '@layouts/layout.service';
import { AuthLayout } from '@layouts/auth-layout/auth-layout';
import { DefaultLayout } from '@layouts/default-layout/default-layout';
import { ErrorLayout } from '@layouts/error-layout/error-layout';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, AuthLayout, DefaultLayout, ErrorLayout ],
  templateUrl: './app.html',
})
export class App {
  protected readonly layoutService = inject(LayoutService);
}
