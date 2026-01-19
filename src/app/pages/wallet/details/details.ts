import { Component } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
@Component({
  selector: 'app-details',
  imports: [ContentWrapper, PageHeader],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

}
