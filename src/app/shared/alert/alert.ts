/**
 * @author daniele.denti@bluewin.ch
 */
import {AnyComponent, AnyItem} from '../shared';
import {Type} from '@angular/core';

export const ALERT_DISMISS_KEY = 'alert-dismiss-key';

export const ALERT_LOOP_DEFAULT_DELAY = 3000;

export const ALERT_LOOP_RESET_VALUE = -1;

/**
 * @description defines a generic alert. The dismissable property, if true, make possible, for the user, to dismiss the alert.
 * @since 2.0
 */
export interface AnyAlertComponent extends AnyComponent {
  dismissible: boolean;
}
/**
 * @description builds a generic alert component. The dismissible property, if true, make possible, for the user, to dismiss the alert.
 * @since 2.0
 */
export class AnyAlertItem extends AnyItem{
  constructor(public component: Type<any>, public data: any, public id: string, public dismissible: boolean) {
    super(component, data, id);
  }
}
