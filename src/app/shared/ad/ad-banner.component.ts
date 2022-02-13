import {Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdDirective} from './ad-directive';
import {AnyAdItem} from './ad';

@Component({
  selector: 'app-ad-banner',
  styles: [
    `.ad-banner {
      padding: 20px 0;
    }`
  ],
  template: `
    <div class="ad-banner">
      <ng-template appAdHost></ng-template>
    </div>
  `
})
export class AdBannerComponent implements OnDestroy, OnInit{

  @ViewChild(AdDirective, {static: true}) appAdHost: AdDirective;

  @Input() ads: AnyAdItem[];

  currentAdIndex = -1;

  interval: any;

  getAds(): void {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  loadComponent(): void {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const viewContainerRef = this.appAdHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit(): void {
    this.loadComponent();
    this.getAds();
  }

}
