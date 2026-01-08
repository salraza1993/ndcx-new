import { ChangeDetectionStrategy, Component } from '@angular/core';
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
      'login-page-host relative flex flex-col justify-center gap-[var(--block-gap)] h-full max-w-[var(--block-max-width)] mx-auto'
  }
  // position: relative;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // gap: var(--block-gap);
  // margin-inline: auto;
  // height: 100%;
  // max-width: var(--block-max-width);
})
export class Login {}
