import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNonRendu]',
  standalone: true
})
export class NonRenduDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.el.nativeElement, 'border', '1px dashed red');
    this.renderer.setStyle(this.el.nativeElement, 'background-color', 'yellow');
  }
}
