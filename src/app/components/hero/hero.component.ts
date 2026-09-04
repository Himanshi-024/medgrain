// import { Component, OnDestroy, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';

// interface Stat {
//   label: string;
//   target: number;
//   suffix: string;
//   value: number;
// }

// @Component({
//   selector: 'app-hero',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './hero.component.html',
//   styleUrl: './hero.component.scss',
// })
// export class HeroComponent implements OnInit, OnDestroy {
//   slides = [
//     'assets/images/packaging.webp',
//     'assets/images/wheatFlour.webp',
//     'assets/images/multigrainFlour.webp',
//   ];
//   activeSlide = 0;
//   private slideTimer?: ReturnType<typeof setInterval>;
//   private countTimer?: ReturnType<typeof setInterval>;

//   stats: Stat[] = [
//     { label: 'States Served', target: 4, suffix: '', value: 0 },
//     { label: 'Product Categories', target: 9, suffix: '', value: 0 },
//     { label: 'Largest Pack', target: 50, suffix: ' kg', value: 0 },
//   ];
//   packSizes = ['5 kg', '10 kg', '26 kg', '30 kg', '50 kg'];

//   ngOnInit(): void {
//     this.slideTimer = setInterval(() => {
//       this.activeSlide = (this.activeSlide + 1) % this.slides.length;
//     }, 5500);
//     this.animateStats();
//   }

//   ngOnDestroy(): void {
//     if (this.slideTimer) clearInterval(this.slideTimer);
//     if (this.countTimer) clearInterval(this.countTimer);
//   }

//   private animateStats(): void {
//     const durationMs = 1100;
//     const stepMs = 30;
//     const steps = durationMs / stepMs;
//     let step = 0;

//     this.countTimer = setInterval(() => {
//       step++;
//       const progress = Math.min(step / steps, 1);
//       this.stats.forEach((stat) => (stat.value = Math.round(stat.target * progress)));
//       if (progress >= 1 && this.countTimer) clearInterval(this.countTimer);
//     }, stepMs);
//   }
// }



import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit, OnDestroy {
  slides = [
    'assets/images/packaging.webp',
    'assets/images/wheatFlour.webp',
    'assets/images/multigrainFlour.webp',
  ];
  activeSlide = 0;
  private slideTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.slideTimer = setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    }, 5200);
  }

  ngOnDestroy(): void {
    if (this.slideTimer) clearInterval(this.slideTimer);
  }
}
