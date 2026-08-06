import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  contentChild,
  input,
  TemplateRef
} from '@angular/core';
import { LoginLogo } from '../login-logo/login-logo';

@Component({
  selector: 'app-auth-content',
  imports: [LoginLogo, NgTemplateOutlet],
  templateUrl: './auth-content.html',
  styleUrl: './auth-content.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'auth-content-host flex flex-col' }
})
export class AuthContent {
  title = contentChild<TemplateRef<unknown>>('title');
  content = contentChild<TemplateRef<unknown>>('content');
  hideContent = input(false, { transform: booleanAttribute });
  hideTitle = input(false, { transform: booleanAttribute });
}
