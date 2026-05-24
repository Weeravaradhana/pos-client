import { Component } from '@angular/core';
import {MainHeader} from "../../core/main-header/main-header";
import {MainFooter} from '../../core/main-footer/main-footer';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-home-page-context',
  imports: [
    MainHeader,
    MainFooter,
    RouterOutlet
  ],
  templateUrl: './home-page-context.html',
  styleUrl: './home-page-context.scss',
})
export class HomePageContext {

}
