import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-business',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './business.component.html',
  styleUrl: './business.component.scss',
})
export class BusinessComponent {
  distributorPerks = [
    'Multiple product categories',
    'Attractive pack sizes',
    'Reliable supply',
    'Distributor support',
    'Retailer-focused products',
    'Growing market opportunities',
  ];

  foodBusinesses = [
    'Restaurants', 'Hotels', 'Caterers', 'Bakeries', 'Hostels', 'Institutions', 'Food Manufacturers',
  ];
}
