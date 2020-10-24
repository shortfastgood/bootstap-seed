import {AnyAlertItem} from './alert';
import {AlertComponent} from './alert.component';

export class AlertService {

  alerts: AnyAlertItem[];

  constructor() {
    this.alerts = new Array<AnyAlertItem>();
  }

  public getAlerts(): AnyAlertItem[] {
    return this.alerts;
  }

  public putAlert(
    clazz= 'alert alert-light',
    message= 'no message provided for this alert',
    id= 'alert',
    dismissable= false): void {

    let currentItem = this.alerts.find(alert => alert.id === id);
    if (!currentItem) {
      currentItem = new AnyAlertItem(AlertComponent, {class: clazz, body: message}, id, dismissable);
      this.alerts.push(currentItem);
    } else {
      currentItem.data = {class: clazz, body: message};
      currentItem.dismissable = dismissable;
      currentItem.id = id;
    }
  }

  public putDarkAlert(message= 'unknown dark alert', id= 'dark', dismissable= false): void {
    this.putAlert('alert alert-dark', message, id, dismissable);
  }

  public putDangerAlert(message= 'unknown danger', id= 'danger', dismissable= false): void {
    this.putAlert('alert alert-danger', message, id, dismissable);
  }

  public putInfoAlert(message= 'unknown information', id= 'info', dismissable= false): void {
    this.putAlert('alert alert-info', message, id, dismissable);
  }

  public putLightAlert(message= 'no message provided for this alert', id= 'light', dismissable= false): void {
    this.putAlert('alert alert-light', message, id, dismissable);
  }

  public putPrimaryAlert(message= 'no message provided for this alert', id= 'primary', dismissable= false): void {
    this.putAlert('alert alert-primary', message, id, dismissable);
  }

  public putSecondaryAlert(message= 'no message provided for this alert', id= 'secondary', dismissable= false): void {
    this.putAlert('alert alert-secondary', message, id, dismissable);
  }

  public putSuccessAlert(message= 'no message provided for this alert', id= 'success', dismissable= false): void {
    this.putAlert('alert alert-success', message, id, dismissable);
  }

  public putWarningAlert(message= 'no message provided for this alert', id= 'warning', dismissable= false): void {
    this.putAlert('alert alert-warning', message, id, dismissable);
  }

  public romoveAllAlerts(): void {
    this.alerts = new Array<AnyAlertItem>();
  }

  public removeAlert(id: string): void {
    const index = this.alerts.findIndex(alert => alert.id === id);
    if (index >= 0) {
      const lowerSlice = this.alerts.slice(0, index);
      if (index + 1 <= this.alerts.length) {
        const upperSlice = this.alerts.slice(index + 1, this.alerts.length);
        this.alerts = lowerSlice.concat(upperSlice);
      } else {
        this.alerts = lowerSlice;
      }
    }
  }
}
