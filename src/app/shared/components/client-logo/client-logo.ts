import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-client-logo',
  imports: [],
  templateUrl: './client-logo.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './client-logo.css'
})
export class ClientLogo {
  variant = input<'color' | 'light' | 'dark' | 'auto'>('auto');
  type = input<'full' | 'icon' | 'normal'>('normal');
}
