import {Component, ComponentFactoryResolver, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AdDirective} from './ad-directive';
import {AnyAdComponent, AnyAdItem} from './ad';

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
  @Input() ads: AnyAdItem[];

  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) appAdHost: AdDirective;

  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  getAds(): void {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

  loadComponent(): void {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem = this.ads[this.currentAdIndex];

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.appAdHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<AnyAdComponent>(componentFactory);
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
