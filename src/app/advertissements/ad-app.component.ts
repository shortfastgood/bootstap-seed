import {Component, OnInit} from '@angular/core';
import {AdService} from './ad.service';
import {AnyAdItem} from '../shared/ad/ad';

@Component({
  selector: 'app-ad-app',
  styleUrls: ['./ad-app.component.css'],
  templateUrl: './ad-app.component.html'
})
export class AdAppComponent implements OnInit {

  ads: AnyAdItem[];

  constructor(private adService: AdService) {}

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }
}
