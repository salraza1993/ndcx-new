import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';

@Component({
  selector: 'app-bookings',
  imports: [ContentWrapper, PageHeader],
  templateUrl: './bookings.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './bookings.css'
})
export class Bookings {}
