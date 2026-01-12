import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthContent } from '@app/auth/components/auth-content/auth-content';
import { ButtonModule } from 'primeng/button';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-forget-password',
  imports: [AuthContent, IconField, RouterLink, InputIcon, InputTextModule, ButtonModule],
  templateUrl: './forget-password.html',
  styleUrl: './forget-password.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'login-page-host relative flex flex-col justify-center gap-3 h-full max-w-[var(--block-max-width)] mx-auto',
    '[animate.enter]': 'animateOnEnter',
    '[style.--animation-delay]': '"500ms"'
  }
})
export class ForgetPassword {
  protected animateOnEnter = 'slide-in';
  protected animateOnExit = 'slide-out';
}
