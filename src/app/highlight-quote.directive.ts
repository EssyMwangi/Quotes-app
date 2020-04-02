import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightQuote]'
})
export class HighlightQuoteDirective {

  constructor(el:ElementRef) { 
    el.nativeElement.style.color = 'limegreen';
  }

}
