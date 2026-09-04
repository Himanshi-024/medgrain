import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-manufacturing',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.scss',
})
export class ManufacturingComponent {
  steps: string[] = [
    'Raw Material Selection',
    'Cleaning',
    'Processing',
    'Quality Checks',
    'Hygienic Packing',
    'Storage and Dispatch',
  ];
}
