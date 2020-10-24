import {NgModule} from '@angular/core';
import {AdDirective} from './ad-directive';
import {AdBannerComponent} from './ad-banner.component';

@NgModule({
  declarations: [AdBannerComponent, AdDirective],
  exports: [AdBannerComponent],
  imports: [],
  providers: []
})
export class AdModule {}
