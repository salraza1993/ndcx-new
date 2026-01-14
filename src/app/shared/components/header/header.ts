import { Component } from '@angular/core';
import { ClientLogo } from "../client-logo/client-logo";
import { HeaderSearch } from "./header-search/header-search";
import { HeaderProfile } from "./header-profile/header-profile";

@Component({
  selector: 'app-header',
  imports: [ClientLogo, HeaderSearch, HeaderProfile],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
