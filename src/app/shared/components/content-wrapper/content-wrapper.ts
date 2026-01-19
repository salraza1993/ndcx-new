import { Component, input } from '@angular/core';
type Size = 'sm' | 'md' | 'lg' | 'xl' | 'full';
@Component({
  selector: 'app-content-wrapper',
  imports: [],
  template: `<ng-content>Content Wrapper!</ng-content>`,
  styles: `
    :host {
      position: relative;
      display: block;
      width: 100%;
      margin-inline: auto;
      max-width: var(--max-container-width);
    }
  `,
  host: {
    class: 'app-content-wrapper-host',
    '[class]': '`app-content-wrapper-size--${size()}`',
    '[style.--max-container-width]': '`var(--container-size-${size()})`'
  }
})
export class ContentWrapper {
  size = input<Size>('lg');
}
