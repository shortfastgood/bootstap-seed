import {AnyComponent, AnyItem} from '../shared';
import {Type} from '@angular/core';

export const AD_DISMISS_KEY = 'alert-dismiss-key';

export const AD_LOOP_DEFAULT_DELAY = 3000;

export const AD_LOOP_RESET_VALUE = -1;

/**
 * @description defines a generic advertising. The dismissable property, if true, make possible, for the user, to dismiss the advertising.
 * @since 2.0
 */
export interface AnyAdComponent extends AnyComponent {
  dismissable: boolean;
}
/**
 * @description builds a generic advertising component. The dismissable property, if true, make possible, for the user, to dismiss the advertising.
 * @since 2.0
 */
export class AnyAdItem extends AnyItem{
  constructor(public component: Type<any>, public data: any, public id: string, public dismissable: boolean) {
    super(component, data, id);
  }
}
