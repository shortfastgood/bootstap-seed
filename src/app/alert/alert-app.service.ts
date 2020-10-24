import {AlertService} from '../shared/alert/alert.service';
import {Injectable} from '@angular/core';

@Injectable()
export class AlertAppService extends AlertService {

  constructor() {
    super();
    this.putDarkAlert('A simple dark alert—check it out!');
    this.putDangerAlert('A simple danger alert—check it out!');
    this.putInfoAlert('A simple info alert—check it out!');
    this.putLightAlert('A simple light alert—check it out!');
    this.putPrimaryAlert('A simple primary alert—check it out!');
    this.putSecondaryAlert('A simple secondary alert—check it out!');
    this.putSuccessAlert('A simple success alert—check it out!');
    this.putWarningAlert('A simple warning alert—check it out!');
  }

}
