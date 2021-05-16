import { Input } from '@angular/core';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appFrame]'
})
export class FrameDirective {

  @Input()
  id!: number;

  @HostBinding('style.border')
  border = 'none';

  @HostListener('click') onMouseClick(): void {
    this.changeBorder();
  }

  private changeBorder(): void {
    this.border = this.border === 'none' ? this.border = 'solid' : this.border = 'none';
    console.log(`ID ${this.id} clicked!`);
  }
}

type Borders = 'none' | 'solid';

