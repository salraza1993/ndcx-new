import { Component } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
@Component({
  selector: 'app-update',
  imports: [ContentWrapper, PageHeader],
  templateUrl: './update.html',
  styleUrl: './update.css'
})
export class Update {}
