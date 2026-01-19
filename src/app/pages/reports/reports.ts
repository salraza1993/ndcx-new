import { Component } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-reports',
  imports: [ContentWrapper, PageHeader, ButtonModule],
  templateUrl: './reports.html',
  styleUrl: './reports.css'
})
export class Reports {}
