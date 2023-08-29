import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[customInput]',
  host:  {
    'class': 'size-default',
    '[class.size-small]': `size === 'small'`,
    '[class.size-large]': `size === 'large'`,
  }
})
export class InputDirective {
  @Input() size: string = '' // small, default, large;

  constructor() { }
}
