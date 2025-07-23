import {Component, Input} from '@angular/core';
import {AnyAdComponent} from '../shared/ad/ad';

@Component({
  template: `
    <div class="alert alert-light">
      <h4 class="alert-heading">Featured Hero Profile</h4>
      <h5>{{data.name}}</h5>
      <p>{{data.bio}}</p>
      <hr>
      <p><strong>Hire this hero today!</strong></p>
    </div>
  `,
  standalone: false
})
export class HeroProfileComponent implements AnyAdComponent{
  @Input() data: any;

  @Input() public dismissable!: boolean;

  @Input() public id!: string;
}
