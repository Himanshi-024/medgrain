import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

interface FactoryImage {
  image: string;
  alt: string;
  number: string;
  title: string;
  category: string;
  description: string;
}

@Component({
  selector: 'app-manufacturing',
  standalone: true,
  imports: [
    CommonModule,
    RevealDirective
  ],
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.scss',
})
export class ManufacturingComponent {

  steps: string[] = [
    'Raw Material Selection',
    'Cleaning & Grading',
    'Processing & Milling',
    'Quality Checking',
    'Packing',
    'Storage & Dispatch'
  ];


  factoryImages: FactoryImage[] = [

    {
      image: 'assets/images/factory-1.jpg',
      alt: 'Medgrain manufacturing facility and flour processing equipment',
      number: '01',
      title: 'Processing Equipment',
      category: 'Manufacturing',
      description:
        'Modern processing equipment supporting systematic grain handling and flour manufacturing.'
    },

    {
      image: 'assets/images/factory-2.jpg',
      alt: 'Flour processing machinery inside manufacturing facility',
      number: '02',
      title: 'Flour Processing Line',
      category: 'Production',
      description:
        'Integrated machinery used across different stages of the flour processing operation.'
    },

    {
      image: 'assets/images/factory-3.jpg',
      alt: 'Industrial flour manufacturing machinery',
      number: '03',
      title: 'Production Operations',
      category: 'Plant Operations',
      description:
        'A view of the production setup supporting controlled and consistent manufacturing.'
    },

    {
      image: 'assets/images/factory-4.jpg',
      alt: 'Medgrain manufacturing facility exterior',
      number: '04',
      title: 'Our Manufacturing Facility',
      category: 'Facility',
      description:
        'Our manufacturing facility supporting production, storage and business operations.'
    }

  ];

}
