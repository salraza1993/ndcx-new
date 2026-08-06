import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
@Component({
  selector: 'app-activities',
  imports: [ContentWrapper, PageHeader],
  templateUrl: './activities.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './activities.css'
})
export class Activities {}
