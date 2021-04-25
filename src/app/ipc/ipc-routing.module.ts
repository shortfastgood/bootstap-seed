import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IpcComponent} from './ipc.component';

const routes: Routes = [{path: 'ipc', component: IpcComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpcRoutingModule { }
