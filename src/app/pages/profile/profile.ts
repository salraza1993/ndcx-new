import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';
@Component({
  selector: 'app-profile',
  imports: [RouterOutlet, ContentWrapper, PageHeader],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {}
