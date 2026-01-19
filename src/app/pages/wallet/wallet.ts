import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
@Component({
  selector: 'app-wallet',
  imports: [RouterOutlet, ContentWrapper, PageHeader],
  templateUrl: './wallet.html',
  styleUrl: './wallet.css'
})
export class Wallet {}
