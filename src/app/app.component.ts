import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { WhyChooseComponent } from './components/why-choose/why-choose.component';
import { CinematicBannerComponent } from './components/cinematic-banner/cinematic-banner.component';
import { ManufacturingComponent } from './components/manufacturing/manufacturing.component';
import { BusinessComponent } from './components/business/business.component';
import { VisionPresenceComponent } from './components/vision-presence/vision-presence.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { CareerComponent } from './components/career/career.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ProductsComponent,
    WhyChooseComponent,
    CinematicBannerComponent,
    ManufacturingComponent,
    BusinessComponent,
    VisionPresenceComponent,
    ContactComponent,
    FooterComponent,
    CareerComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  isLoading = true;

  ngOnInit(): void {
    window.setTimeout(() => (this.isLoading = false), 850);
  }
}
