import { Component } from '@angular/core';
import { InputText } from 'primeng/inputtext';
import { IconField } from "primeng/iconfield";
import { InputIcon } from "primeng/inputicon";

@Component({
  selector: 'app-header-search',
  imports: [InputText, IconField, InputIcon],
  templateUrl: './header-search.html',
  styleUrl: './header-search.css'
})
export class HeaderSearch {}
