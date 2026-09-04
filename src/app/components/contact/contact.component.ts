import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;

  onSubmit() {
    // This is a static front-end demo: there is no backend yet, so the
    // enquiry is not actually sent anywhere. Wire this up to an email
    // service (e.g. Formspree, EmailJS) or your own API when you're ready.
    this.submitted = true;
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
