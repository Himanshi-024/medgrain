// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { RevealDirective } from '../../shared/reveal.directive';

// @Component({
//   selector: 'app-vision-presence',
//   standalone: true,
//   imports: [CommonModule, RevealDirective],
//   templateUrl: './vision-presence.component.html',
//   styleUrl: './vision-presence.component.scss',
// })
// export class VisionPresenceComponent {
//   missionPoints = [
//     'Maintaining consistent product quality',
//     'Following strong quality and GMP-based practices',
//     'Focusing on hygienic and responsible manufacturing',
//     'Building reliable supply and distribution networks',
//     'Developing long-term customer and business relationships',
//     'Continuously improving products and processes',
//     'Creating sustainable value for customers and stakeholders',
//   ];

//   values = [
//     ['Quality First', 'Quality should be built into every stage, from raw material to finished product.'],
//     ['Integrity', 'We conduct business with honesty, transparency and accountability.'],
//     ['Consistency', 'We strive to deliver consistent products and dependable service.'],
//     ['Customer Focus', 'We listen, learn and work to understand and fulfil customer needs.'],
//     ['GMP & Process Discipline', 'Disciplined processes, hygiene and good manufacturing practices guide our work.'],
//     ['Continuous Improvement', 'We keep looking for better ways to improve products, processes and experience.'],
//     ['Responsibility', 'We take responsibility for product quality, commitments and relationships.'],
//     ['Partnership', 'We build strong, transparent and long-term relationships with our partners.'],
//   ];

//   states = ['Madhya Pradesh', 'Gujarat', 'Maharashtra', 'Rajasthan'];
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-vision-presence',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './vision-presence.component.html',
  styleUrl: './vision-presence.component.scss',
})

export class VisionPresenceComponent {

  missionPoints = [
    'Maintaining consistent product quality',
    'Following strong quality and GMP-based practices',
    'Focusing on hygienic and responsible manufacturing',
    'Building reliable supply and distribution networks',
    'Developing long-term customer and business relationships',
    'Continuously improving products and processes',
    'Creating sustainable value for customers and stakeholders',
  ];

  values = [
    ['Quality First', 'Quality should be built into every stage, from raw material to finished product.'],
    ['Integrity', 'We conduct business with honesty, transparency and accountability.'],
    ['Consistency', 'We strive to deliver consistent products and dependable service.'],
    ['Customer Focus', 'We listen, learn and work to understand and fulfil customer needs.'],
    ['GMP & Process Discipline', 'Disciplined processes, hygiene and good manufacturing practices guide our work.'],
    ['Continuous Improvement', 'We keep looking for better ways to improve products, processes and experience.'],
    ['Responsibility', 'We take responsibility for product quality, commitments and relationships.'],
    ['Partnership', 'We build strong, transparent and long-term relationships with our partners.'],
  ];

  states = ['Madhya Pradesh', 'Gujarat', 'Maharashtra', 'Rajasthan'];
}
