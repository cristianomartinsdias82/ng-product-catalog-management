import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[reverseFor]'
})
export class ReverseForDirective implements OnInit {

  @Input('reverseForIn') numbers: number[] = [];
  @Input('reverseForUsing') text: string = '';

  constructor(private viewContainerRef : ViewContainerRef,
              private templateRef: TemplateRef<any>)
  {
  }

  ngOnInit()
  {
    for (let n of this.numbers.reverse())
      this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: n });

    this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: this.text });
  }
}
