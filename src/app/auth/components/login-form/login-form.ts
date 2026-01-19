import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, effect, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form, FormField, required, submit } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { PasswordModule } from 'primeng/password';
import { AuthServices, SignInCredentialsType } from '../../services/auth-services';

@Component({
  selector: 'app-login-form',
  imports: [
    AutoFocusModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    FormField,
    CommonModule,
    RouterLink,
    MessageModule
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'login-form-host w-full relative flex flex-col gap-4'
  }
})
export class LoginForm implements OnInit {
  private readonly _router = inject(Router);
  private readonly _authService = inject(AuthServices);
  private _loginFormModel = signal<SignInCredentialsType>({
    username: 'APIOUTAGENCY',
    password: 'j#A4uX6'
  });
  isPasswordMasked = signal(true);

  protected loginForm = form(this._loginFormModel, schema => {
    required(schema.username, { message: 'Username is required' });
    required(schema.password, { message: 'Password is required' });
  });

  protected loading = signal(false);
  protected errorMessage = signal<string | null>(null);

  private _loginEffect = effect(() => {
    const _isAuth = this._authService.isAuthenticated();
  });

  isInvalid(fieldName: boolean): boolean {
    return fieldName;
  }

  protected onSubmit(event: Event) {
    event.preventDefault();
    submit(this.loginForm, async () => {
      this.loading.set(true);
      try {
        const _data = await this._authService.signIn(this.loginForm().value());
        this.loading.set(false);
        this.errorMessage.set(null);
        const returnUrl = this._router.parseUrl(this._router.url).queryParams['returnUrl'] || '/';
        this._router.navigateByUrl(returnUrl);
      } catch (error: HttpErrorResponse | unknown) {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.errorMessage.set('Invalid username or password.');
          } else if (error.status === 500) {
            this.errorMessage.set('Server error 500. Please try again later.');
          } else {
            this.errorMessage.set('An error occurred. Please try again later.');
          }
        } else {
          this.errorMessage.set('An unexpected error occurred.');
        }
        this.loading.set(false);
      }
    });
  }

  ngOnInit(): void {
    // Initialization logic if needed
    if (this._authService.isAuthenticated()) {
      this._router.navigateByUrl('/');
    }
  }
}
