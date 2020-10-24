import {NgModule} from '@angular/core';
import {HeroJobAdComponent} from './hero-job-ad.component';
import {HeroProfileComponent} from './hero-profile.component';
import {AdService} from './ad.service';
import {AdAppComponent} from './ad-app.component';
import {AdRoutingModule} from './ad-routing.module';
import {AdModule} from '../shared/ad/ad.module';

@NgModule({
  declarations: [
    AdAppComponent,
    HeroJobAdComponent,
    HeroProfileComponent
  ],
  exports: [AdAppComponent],
  imports: [AdModule, AdRoutingModule],
  providers: [AdService]
})
export class AdAppModule {}
