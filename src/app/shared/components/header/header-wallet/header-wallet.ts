import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavigateDirective } from '@directives/navigate';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-header-wallet',
  imports: [Button, CurrencyPipe, NavigateDirective],
  templateUrl: './header-wallet.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header-wallet.css'
})
export class HeaderWallet {
  currencyName = signal('EGP');
  walletAmount = signal(5558.855869);
}
