import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-layout',
  imports: [],
  templateUrl: './error-layout.html',
  styleUrl: './error-layout.css',
  changeDetection: ChangeDetectionStrategy.Eager,
  host: { class: 'error-layout-host' }
})
export class ErrorLayout {}
