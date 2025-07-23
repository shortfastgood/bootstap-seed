import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAdHost]',
  standalone: false
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
