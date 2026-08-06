import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
@Component({
  selector: 'app-notifications',
  imports: [ContentWrapper, PageHeader],
  templateUrl: './notifications.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './notifications.css'
})
export class Notifications {}
