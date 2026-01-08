import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AuthContent } from '@app/auth/components/auth-content/auth-content';
import { ButtonModule } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-reset-password',
  imports: [AuthContent, IconField, InputIcon, ButtonModule, InputTextModule],
  templateUrl: './reset-password.html',
  styleUrl: './reset-password.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'login-page-host relative flex flex-col justify-center gap-3 h-full max-w-[var(--block-max-width)] mx-auto'
  }
})
export class ResetPassword {}
