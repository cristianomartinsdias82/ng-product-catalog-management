import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[c3rRed]'
})
export class RedDirective {

  constructor(private elementRef: ElementRef)
  {
    elementRef.nativeElement.style.color = '#e3536b';
  }
}