import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-login-logo',
  imports: [],
  template: `<img
    src="/client/logo-light.svg"
    style="width: var(--client-logo-size)"
    alt="Logo Dark"
  />`,
  styleUrl: './login-logo.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'login-logo-host' }
})
export class LoginLogo {}
