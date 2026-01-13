import { Component } from '@angular/core';
import { Aside } from '@app/shared/components/aside/aside';
import { Header } from "@app/shared/components/header/header";

@Component({
  selector: 'app-default-layout',
  imports: [Aside, Header],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.css',
  host: { class: 'default-layout-host' }
})
export class DefaultLayout {}
