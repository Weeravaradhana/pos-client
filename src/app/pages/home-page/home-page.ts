import { Component } from '@angular/core';
import {HeroWidget} from './inner-items/hero-widget/hero-widget';
import {AboutUs} from './inner-items/about-us/about-us';
import {PricingWidget} from './inner-items/pricing-widget/pricing-widget';

@Component({
  selector: 'app-home-page',
  imports: [
    HeroWidget,
    AboutUs,
    PricingWidget
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
