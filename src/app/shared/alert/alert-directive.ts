import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appAlertHost]',
  standalone: false
})
export class AlertDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
