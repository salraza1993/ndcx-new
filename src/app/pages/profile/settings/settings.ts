import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
@Component({
  selector: 'app-settings',
  imports: [ContentWrapper, PageHeader],
  templateUrl: './settings.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './settings.css'
})
export class Settings {}
