import { Component, input } from '@angular/core';

@Component({
  selector: 'app-client-logo',
  imports: [],
  templateUrl: './client-logo.html',
  styleUrl: './client-logo.css'
})
export class ClientLogo {
  variant = input<'light' | 'dark' | 'auto'>('auto');
  type = input<'full' | 'icon' | 'normal'>('normal');
}
