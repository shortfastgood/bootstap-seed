import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

import {ALERT_DISMISS_KEY, ALERT_LOOP_DEFAULT_DELAY, ALERT_LOOP_RESET_VALUE,  AnyAlertItem} from '../shared/alert/alert';
import {AlertAppService} from './alert-app.service';
import {BroadcastService} from '../shared/broadcast.service';
import {BroadcastEvent} from '../shared/shared';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-alerts',
  styleUrls: ['./alert-app.component.css'],
  templateUrl: './alert-app.component.html'
})
export class AlertAppComponent implements OnDestroy, OnInit {

  currentAlertIndex = ALERT_LOOP_RESET_VALUE;

  delay = new FormControl();

  items: AnyAlertItem[];

  message = new FormControl();

  optionDelay = ALERT_LOOP_DEFAULT_DELAY;

  optionDismissible: boolean;

  subscription: Subscription;

  constructor(private alertService: AlertAppService, private broadcastService: BroadcastService) {}

  addDarkAlert(): void {
    this.alertService.putDarkAlert(this.message.value);
    this.reset();
  }

  addDangerAlert(): void {
    this.alertService.putDangerAlert(this.message.value);
    this.reset();
  }

  addInfoAlert(): void {
    this.alertService.putInfoAlert(this.message.value);
    this.reset();
  }

  addLightAlert(): void {
    this.alertService.putLightAlert(this.message.value);
    this.reset();
  }

  addPrimaryAlert(): void {
    this.alertService.putPrimaryAlert(this.message.value);
    this.reset();
  }

  addSecondaryAlert(): void {
    this.alertService.putSecondaryAlert(this.message.value);
    this.reset();
  }

  addSuccessAlert(): void {
    this.alertService.putSuccessAlert(this.message.value);
    this.reset();
  }

  addWarningAlert(): void {
    this.alertService.putWarningAlert(this.message.value);
    this.reset();
  }

  delayChanged(): void {
    if (this.delay.valid) {
      this.optionDelay = this.delay.value;
    }
  }

  dismissibleSwitch(): void {
    this.optionDismissible = !this.optionDismissible;
  }

  handleEvents(event: BroadcastEvent): void {
    if (event.key === ALERT_DISMISS_KEY) {
      this.alertService.removeAlert(event.data);
      this.items = this.alertService.getAlerts();
      this.currentAlertIndex = -1;
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.items = this.alertService.getAlerts();
    this.delay.setValue(ALERT_LOOP_DEFAULT_DELAY);
    this.delay.setValidators([Validators.minLength(4), Validators.pattern(new RegExp('^[0-9]*$'))]);
    this.subscription = this.broadcastService.bus().subscribe(event => this.handleEvents(event));
  }

  removeAll(): void {
    this.alertService.romoveAllAlerts();
    this.items = this.alertService.getAlerts();
    this.currentAlertIndex = -1;
  }

  reset(): void {
    this.items = this.alertService.getAlerts();
    this.currentAlertIndex = -1;
  }
}
