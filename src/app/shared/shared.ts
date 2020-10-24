/**
 * @author daniele.denti@bluewin.ch
 */
import {Type} from '@angular/core';

/**
 * @description Describes a generic component with a unique identifier an some data.
 * @since 2.0
 */
export interface AnyComponent {
  id: string;
  data: any;
}
/**
 * @description Creates a generic component with a unique identifier and some data.
 * @since 2.0
 */
export class AnyItem {
  constructor(public component: Type<any>, public data: any, public id: string) {}
}
/**
 * @description Generic event: the key is mandatory, the data is optional.
 */
export interface BroadcastEvent {
  key: any;
  data?: any;
}
