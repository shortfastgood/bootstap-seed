import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';

import {AlertDirective} from './alert-directive';
import {ALERT_LOOP_DEFAULT_DELAY, ALERT_LOOP_RESET_VALUE, AnyAlertItem} from './alert';

@Component({
  selector: 'app-alert-holder',
  styles: [],
  template: `
    <div class="alert-holder">
      <ng-template appAlertHost></ng-template>
    </div>`,
  standalone: false
})
export class AlertHolderComponent implements OnChanges, OnDestroy, OnInit {

  @ViewChild(AlertDirective, {static: true}) appAlertHost!: AlertDirective;

  @Input() currentAlertIndex = ALERT_LOOP_RESET_VALUE;

  @Input() delay = ALERT_LOOP_DEFAULT_DELAY;

  @Input() optionDismissible!: boolean;

  @Input() items!: AnyAlertItem[];

  interval: any;

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if ((propName === 'optionDismissible' || propName === 'currentAlertIndex') && !changes[propName].firstChange) {
        this.reset();
      } else if (propName === 'delay' && !changes[propName].firstChange) {
        this.delay = changes[propName].currentValue;
        this.reset();
      }
    }
  }

  loadAlertComponents(): void {
    if (this.items.length <= 0) {
      this.appAlertHost.viewContainerRef.clear();
      return;
    }
    this.currentAlertIndex = (this.currentAlertIndex + 1) % this.items.length;
    const alertItem = this.items[this.currentAlertIndex];

    const viewContainerRef = this.appAlertHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(alertItem.component);
    componentRef.instance.data = alertItem.data;
    componentRef.instance.dismissible = this.optionDismissible;
    componentRef.instance.id = alertItem.id;
  }

  loop(): void {
    this.interval = setInterval(() => {
      this.loadAlertComponents();
    }, this.delay);

  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.loadAlertComponents();
    this.loop();
  }

  reset(): void {
    clearInterval(this.interval);
    this.currentAlertIndex = ALERT_LOOP_RESET_VALUE;
    this.loadAlertComponents();
    this.loop();
  }

}
