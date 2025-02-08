import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-navbar',
  standalone: false,
  
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
    ,
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class NavbarComponent {
  isOpen = false;
  dropdowns = {
    adopcion: false,
    tienda: false,
    servicios: false
  };

  toggleMenu(): void {
    this.isOpen = !this.isOpen;
  }

  toggleDropdown(key: 'adopcion' | 'tienda' | 'servicios'): void {
    this.dropdowns[key] = !this.dropdowns[key];
  }

  closeMenu(): void {
    this.isOpen = false;
    this.dropdowns = {
      adopcion: false,
      tienda: false,
      servicios: false
    };
  }
}
