import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClientConfigService } from '@client/services/client-config-service';
import { AuthLayout } from '@layouts/auth-layout/auth-layout';
import { DefaultLayout } from '@layouts/default-layout/default-layout';
import { ErrorLayout } from '@layouts/error-layout/error-layout';
import { LayoutService } from '@layouts/layout.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthLayout, DefaultLayout, ErrorLayout],
  templateUrl: './app.html',
  styles: `
    :host {
      display: block;
      min-height: 100vh;
      min-height: 100dvh;
    }
  `
})
export class App implements OnInit {
  protected readonly layoutService = inject(LayoutService);
  private readonly _clientConfigService = inject(ClientConfigService);

  async ngOnInit(): Promise<void> {
    try {
      await this._clientConfigService.initConfig();
    } catch (error: HttpErrorResponse | unknown) {
      console.error('Error loading initial config:', error as HttpErrorResponse);
    }
  }
}
