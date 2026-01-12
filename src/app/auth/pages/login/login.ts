import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { AuthContent } from '@app/auth/components/auth-content/auth-content';
import { LoginForm } from '@app/auth/components/login-form/login-form';

@Component({
  selector: 'app-login',
  imports: [AuthContent, LoginForm],
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
  protected animateOnEnter = 'slide-in';
  protected animateOnExit = 'slide-out';
  protected userInfo = signal({
    username: 'testUser',
    firstName: 'User',
    lastName: 'Name'
  });
}
