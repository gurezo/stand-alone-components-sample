import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHTagStyle]',
  standalone: true,
})
export class HTagStyleDirective {
  constructor() {}

  @HostBinding('style')
  style = {
    color: 'red',
  };
}
