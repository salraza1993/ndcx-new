import { Component } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
@Component({
  selector: 'app-search',
  imports: [ContentWrapper, PageHeader],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {}
