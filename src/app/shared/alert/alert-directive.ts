import {Directive, ViewContainerRef} from '@angular/core';

@Directive({selector: '[appAlertHost]'})
export class AlertDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
