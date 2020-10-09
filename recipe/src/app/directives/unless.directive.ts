import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(conditionValue: boolean) {
      if(!conditionValue) {
        // if condition is true
        this.containerRef.createEmbeddedView(this.templateRef);
      }
      else {
        // if condition is false
        this.containerRef.clear();
      }
  } 

  constructor(private templateRef: TemplateRef<any>, private containerRef: ViewContainerRef) { }

} 
