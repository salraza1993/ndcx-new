import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';

@Component({
  selector: 'app-admin',
  imports: [ContentWrapper, PageHeader],
  templateUrl: './admin.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './admin.css'
})
export class Admin {}
