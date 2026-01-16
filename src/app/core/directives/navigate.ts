import { Location } from '@angular/common';
import { Directive, inject, input } from '@angular/core';
import { Router } from '@angular/router';
@Directive({
  selector: '[navigate]',
  host: {
    '(click)': 'onClick()'
  }
})
export class NavigateDirective {
  path = input<string | undefined>(undefined);
  private _router = inject(Router);
  private _location = inject(Location);

  onClick() {
    if (this.path() && this.path()?.toLowerCase() !== 'back') {
      this._router.navigateByUrl(this.path()!);
    } else {
      this._location.back();
    }
  }
}
