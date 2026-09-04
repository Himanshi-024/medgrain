import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../shared/reveal.directive';

interface JobPosting {
  title: string;
  location: string;
  type: string;
}

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './career.component.html',
  styleUrl: './career.component.scss',
})
export class CareerComponent {
  whatsappNumber = '919752928882';
  jobs: JobPosting[] = [
    { title: 'Production Supervisor', location: 'Betul, Madhya Pradesh', type: 'Full-time' },
    { title: 'Sales Executive – Distributor Network', location: 'Indore, Madhya Pradesh', type: 'Full-time' },
    { title: 'Quality Control Officer', location: 'Betul, Madhya Pradesh', type: 'Full-time' },
    { title: 'Warehouse & Logistics Executive', location: 'Indore, Madhya Pradesh', type: 'Full-time' },
  ];
  jobApplyLink(job: JobPosting): string {
    const msg = `Hi Medgrain, I would like to apply for the ${job.title} position (${job.location}). Please share more details.`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  }
  get generalWhatsappLink(): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent('Hi Medgrain, I am interested in your quality Atta products. Please share more details.')}`;
  }
}
