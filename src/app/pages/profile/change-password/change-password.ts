import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
@Component({
  selector: 'app-change-password',
  imports: [ContentWrapper, PageHeader],
  templateUrl: './change-password.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './change-password.css'
})
export class ChangePassword {}
