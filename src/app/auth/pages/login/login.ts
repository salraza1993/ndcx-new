import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { AuthContent } from '@app/auth/components/auth-content/auth-content';
import { LoginForm } from '@app/auth/components/login-form/login-form';
import { OtpForm } from '@app/auth/components/otp-form/otp-form';
import { ButtonModule } from 'primeng/button';
import { ClientConfigService } from '../../../../client-configs/services/client-config-service';

@Component({
  selector: 'app-login',
  imports: [AuthContent, ButtonModule, LoginForm, OtpForm],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class:
      'login-page-host relative flex flex-col justify-center gap-[var(--block-gap)] h-full max-w-[var(--block-max-width)] mx-auto',
    '[animate.enter]': 'animateOnEnter'
  }
})
export class Login {
  private _clientConfigService = inject(ClientConfigService);
  protected userInfo = this._clientConfigService.getUserInfo();
  protected animateOnEnter = 'slide-in';
  protected animateOnExit = 'slide-out';
  protected showOtpForm = signal(false);
}
