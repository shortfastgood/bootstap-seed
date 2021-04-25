import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IpcRoutingModule } from './ipc-routing.module';
import { IpcComponent } from './ipc.component';


@NgModule({
  declarations: [IpcComponent],
  imports: [
    CommonModule,
    IpcRoutingModule
  ]
})
export class IpcModule { }
