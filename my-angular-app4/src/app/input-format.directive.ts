import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el:ElementRef) {
    el.nativeElement.style.backgroundColor="green"
   }

   @HostListener('click') onClick() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}
