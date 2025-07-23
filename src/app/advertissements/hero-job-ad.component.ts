import {Component, Input} from '@angular/core';
import {AnyAdComponent} from '../shared/ad/ad';

@Component({
  template: `
    <div class="alert alert-light">
      <h4 class="alert-heading">{{data.headline}}</h4>
      {{data.body}}
    </div>
`,
  standalone: false
})
export class HeroJobAdComponent implements AnyAdComponent {
  @Input() data: any;

  @Input() public dismissable!: boolean;

  @Input() public id!: string;
}
