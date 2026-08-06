import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';

@Component({
  selector: 'app-header-search',
  imports: [InputText, IconField, InputIcon],
  templateUrl: './header-search.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './header-search.css'
})
export class HeaderSearch {}
