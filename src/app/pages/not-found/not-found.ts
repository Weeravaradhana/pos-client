import { Component } from '@angular/core';
import {QuickLink} from '../../dto/QuickLink';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {
  quickLinks: QuickLink[] = [
    { icon: '🏠', label: 'Home',      href: '/'        },
    { icon: '💰', label: 'Pricing',   href: '/#pricing' },
    { icon: '🏢', label: 'About Us',  href: '/#about'  },
    { icon: '💬', label: 'Contact',   href: '/#contact' },
  ];

  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }

  goBack(): void {
    history.back();
  }
}
