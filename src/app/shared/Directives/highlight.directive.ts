import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeBackgroundColor]'
})
export class ChangeBackgroundColorDirective {

  @HostBinding('style.background-color')
  backgroundColor = 'transparent';

  @HostListener('mouseenter') onMouseEnter(): void {
    this.changeBackgroundColor('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.changeBackgroundColor('transparent');
  }

  private changeBackgroundColor(color: Colors): void {
    this.backgroundColor = color;
  }
}

type Colors = "transparent" | "yellow";