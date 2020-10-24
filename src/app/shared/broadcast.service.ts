import {EventEmitter, Injectable} from '@angular/core';
import {BroadcastEvent} from './shared';

@Injectable()
export class BroadcastService {

  eventBus: EventEmitter<BroadcastEvent>;

  constructor() {
    this.eventBus = new EventEmitter();
  }

  public broadcast(key: any, data?: any): void {
    this.eventBus.emit({key, data});
  }

  public bus(): EventEmitter<BroadcastEvent> {
    return this.eventBus;
  }
}
