import {Component, Input} from '@angular/core';

import {ALERT_DISMISS_KEY, AnyAlertComponent} from './alert';
import {BroadcastService} from '../broadcast.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements AnyAlertComponent {

  @Input() public animation = 'fadeIn';

  @Input() data: any;

  @Input() public dismissible: boolean;

  @Input() public id: string;

  constructor(private broadcastService: BroadcastService) {}

  dismissAlert(id: string): void {
    this.broadcastService.broadcast(ALERT_DISMISS_KEY, id);
  }

}
