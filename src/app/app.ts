import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InitializeClientConfigService } from '@client/services/initialize-client-config-service';
import { AuthLayout } from '@layouts/auth-layout/auth-layout';
import { DefaultLayout } from '@layouts/default-layout/default-layout';
import { ErrorLayout } from '@layouts/error-layout/error-layout';
import { LayoutService } from '@layouts/layout.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthLayout, DefaultLayout, ErrorLayout],
  templateUrl: './app.html'
})
export class App implements OnInit {
  protected readonly layoutService = inject(LayoutService);
  private readonly _initialClientConfigService = inject(InitializeClientConfigService);

  async ngOnInit(): Promise<void> {
    try {
      await this._initialClientConfigService.initConfig();
    } catch (error) {
      console.error('Error loading initial config:', error);
    }
  }
}
