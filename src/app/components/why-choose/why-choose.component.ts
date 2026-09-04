import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

interface Reason {
  title: string;
  desc: string;
}

@Component({
  selector: 'app-why-choose',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './why-choose.component.html',
  styleUrl: './why-choose.component.scss',
})
export class WhyChooseComponent {
  reasons: Reason[] = [
    { title: 'Quality Raw Materials', desc: 'We carefully select raw materials to maintain consistent quality.' },
    { title: 'Hygienic Processing', desc: 'Our products are processed under controlled and hygienic conditions.' },
    { title: 'Consistent Quality', desc: 'We focus on maintaining consistency in taste, texture and product quality.' },
    { title: 'Multiple Pack Sizes', desc: 'Available in consumer and bulk pack sizes to meet different customer requirements.' },
    { title: 'Trusted Supply', desc: 'Reliable supply for retailers, distributors, restaurants and institutional buyers.' },
    { title: 'Made for Every Kitchen', desc: 'From household kitchens to large food businesses, Medgrain offers products for every requirement.' },
  ];
}
