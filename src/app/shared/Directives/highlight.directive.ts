import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.background-color')
  backgroundColor = 'transparent';

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('transparent');
  }

  private highlight(color: string): void {
    this.backgroundColor = color;
  }

}
