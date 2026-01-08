import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Field, form, required } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
interface LoginFormModelType {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login-form',
  imports: [
    InputTextModule,
    FormsModule,
    PasswordModule,
    IconFieldModule,
    InputIconModule,
    ButtonModule,
    Field,
    CommonModule,
    RouterLink
  ],
  templateUrl: './login-form.html',
  styleUrl: './login-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'login-form-host w-full relative flex flex-col gap-4'
  }
})
export class LoginForm {
  private _loginFormModel = signal<LoginFormModelType>({
    username: '',
    password: ''
  });

  protected loginForm = form(this._loginFormModel, schema => {
    required(schema.username, { message: 'Username is required' });
    required(schema.password, { message: 'Password is required' });
  });
}
