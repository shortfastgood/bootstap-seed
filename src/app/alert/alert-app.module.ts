import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertAppComponent } from './alert-app.component';
import { AlertAppService } from './alert-app.service';
import { AlertRoutingModule } from './alert-routing.module';
import { AlertModule } from '../shared/alert/alert.module';


@NgModule({
  declarations: [AlertAppComponent],
  imports: [
    AlertModule,
    AlertRoutingModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [AlertAppService]
})
export class AlertAppModule { }
