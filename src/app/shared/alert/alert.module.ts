import {NgModule} from '@angular/core';

import {AlertComponent} from './alert.component';
import {AlertDirective} from './alert-directive';
import {AlertHolderComponent} from './alert-holder.component';
import {AlertService} from './alert.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [AlertComponent, AlertDirective, AlertHolderComponent],
  exports: [AlertHolderComponent],
  imports: [
    CommonModule
  ],
  providers: [AlertService]
})
export class AlertModule {}
