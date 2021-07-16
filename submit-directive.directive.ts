import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSubmitDirective]'
})
export class SubmitDirectiveDirective {

  constructor(el : ElementRef) {
    el.nativeElement.style.color = 'maroon';
   }

}
