import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdAppComponent} from './ad-app.component';

const routes: Routes = [{path: 'ad', component: AdAppComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdRoutingModule {}
