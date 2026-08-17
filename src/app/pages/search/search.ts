import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { SelectButtonModule } from 'primeng/selectbutton';
@Component({
  selector: 'app-search',
  imports: [ContentWrapper, SelectButtonModule, FormsModule],
  templateUrl: './search.html',
  styleUrls: ['./search.css'],
  host: { class: 'app-search-host' }
})
export class Search {
  protected value = signal('one-way');
  protected stateOptions = signal<{ label: string; value: string }[]>([
    { label: 'One-Way', value: 'one-way' },
    { label: 'Return', value: 'return' }
  ]);
}
