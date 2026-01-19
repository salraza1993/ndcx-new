import { Component } from '@angular/core';
import { ContentWrapper } from '@components/content-wrapper/content-wrapper';
import { PageHeader } from '@components/page-header/page-header';

@Component({
  selector: 'app-offers',
  imports: [ContentWrapper, PageHeader],
  templateUrl: './offers.html',
  styleUrl: './offers.css'
})
export class Offers {}
