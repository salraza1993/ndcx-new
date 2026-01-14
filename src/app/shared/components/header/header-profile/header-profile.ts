import { Component, signal } from '@angular/core';
import { SplitButtonModule } from 'primeng/splitbutton';

@Component({
  selector: 'app-header-profile',
  imports: [SplitButtonModule],
  templateUrl: './header-profile.html',
  styleUrl: './header-profile.css'
})
export class HeaderProfile {
  items = signal([
    {
      label: 'Update'
    },
    {
      label: 'Delete'
    },
    { label: 'Angular.dev', url: 'https://angular.dev' },
    { separator: true },
    { label: 'Upload', routerLink: ['/fileupload'] }
  ]);
}
