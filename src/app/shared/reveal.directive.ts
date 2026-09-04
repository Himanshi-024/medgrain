import { Directive, ElementRef, Input, OnInit } from '@angular/core';

/**
 * Add [appReveal] to any element to fade + slide it in the first time it
 * scrolls into view. Optional [appReveal]="delayInMs" staggers a group of
 * siblings (e.g. cards in a grid).
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit {
  @Input('appReveal') delay: number | string = 0;

  constructor(private el: ElementRef<HTMLElement>) {}

  ngOnInit() {
    const node = this.el.nativeElement;
    node.classList.add('reveal');
    const delayMs = Number(this.delay) || 0;
    if (delayMs) {
      node.style.transitionDelay = `${delayMs}ms`;
    }

    if (!('IntersectionObserver' in window)) {
      node.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('is-visible');
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(node);
  }
}
