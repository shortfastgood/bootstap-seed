import {AnyAdItem} from '../shared/ad/ad';
import {HeroProfileComponent} from './hero-profile.component';
import {HeroJobAdComponent} from './hero-job-ad.component';

export class AdService {
  getAds(): AnyAdItem[] {
    return [
      new AnyAdItem(HeroProfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}, 'bombasto', false),
      new AnyAdItem(HeroProfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}, 'driq', false),
      new AnyAdItem(HeroJobAdComponent, {headline: 'Hiring for several positions', body: 'Submit your resume today!'}, 'hiring', false),
      new AnyAdItem(HeroJobAdComponent, {headline: 'Openings in all departments', body: 'Apply today!'}, 'openings', false)
    ];
  }
}
