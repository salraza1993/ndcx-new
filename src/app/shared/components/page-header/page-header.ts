import { NgTemplateOutlet } from '@angular/common';
import {
  booleanAttribute,
  ChangeDetectionStrategy,
  Component,
  contentChild,
  input,
  TemplateRef
} from '@angular/core';
import { DividerModule } from 'primeng/divider';
@Component({
  selector: 'app-page-header',
  imports: [NgTemplateOutlet, DividerModule],
  templateUrl: './page-header.html',
  styleUrl: './page-header.css',
  host: { class: 'app-page-header-host' },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeader {
  heading = input<string>('Page Header');
  noTitle = input(false, { transform: booleanAttribute });
  noBorder = input(false, { transform: booleanAttribute });
  headerTemplate = contentChild<TemplateRef<unknown>>('heading');
  startTemplate = contentChild<TemplateRef<unknown>>('start');
  endTemplate = contentChild<TemplateRef<unknown>>('end');
}
