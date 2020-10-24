import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AlertAppComponent} from './alert-app.component';

const routes: Routes = [{path: 'alert', component: AlertAppComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertRoutingModule { }
