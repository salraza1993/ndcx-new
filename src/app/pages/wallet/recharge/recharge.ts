import { Component } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
@Component({
  selector: 'app-recharge',
  imports: [ContentWrapper, PageHeader],
  templateUrl: './recharge.html',
  styleUrl: './recharge.css'
})
export class Recharge {}
