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
    clazz= 'alert',
    message= 'no message provided for this alert',
    id= 'alert',
    dismissible= false): void {

    let currentItem = this.alerts.find(alert => alert.id === id);
    if (!currentItem) {
      currentItem = new AnyAlertItem(AlertComponent, {class: clazz, body: message}, id, dismissible);
      this.alerts.push(currentItem);
    } else {
      currentItem.data = {class: clazz, body: message};
      currentItem.dismissible = dismissible;
      currentItem.id = id;
    }
  }

  public putDarkAlert(message= 'unknown dark alert', id= 'dark', dismissible= false): void {
    this.putAlert('alert alert-dark alert-dismissible fade show', message, id, dismissible);
  }

  public putDangerAlert(message= 'unknown danger', id= 'danger', dismissible= false): void {
    this.putAlert('alert alert-danger alert-dismissible fade show', message, id, dismissible);
  }

  public putInfoAlert(message= 'unknown information', id= 'info', dismissible= false): void {
    this.putAlert('alert alert-info alert-dismissible fade show', message, id, dismissible);
  }

  public putLightAlert(message= 'no message provided for this alert', id= 'light', dismissible= false): void {
    this.putAlert('alert alert-light alert-dismissible fade show', message, id, dismissible);
  }

  public putPrimaryAlert(message= 'no message provided for this alert', id= 'primary', dismissible= false): void {
    this.putAlert('alert alert-primary alert-dismissible fade show', message, id, dismissible);
  }

  public putSecondaryAlert(message= 'no message provided for this alert', id= 'secondary', dismissible= false): void {
    this.putAlert('alert alert-secondary alert-dismissible fade show', message, id, dismissible);
  }

  public putSuccessAlert(message= 'no message provided for this alert', id= 'success', dismissible= false): void {
    this.putAlert('alert alert-success alert-dismissible fade show', message, id, dismissible);
  }

  public putWarningAlert(message= 'no message provided for this alert', id= 'warning', dismissible= false): void {
    this.putAlert('alert alert-warning', message, id, dismissible);
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
