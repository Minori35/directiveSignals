import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[CustomLabel]'
})
export class CustomLabelDirective  implements OnInit{

  private htmlElement? : ElementRef<HTMLElement>
  constructor(private el: ElementRef<HTMLElement> ) { 
   this.htmlElement = el;

   this.htmlElement.nativeElement.innerHTML='Holamundo'
    
  }
  ngOnInit(): void {

  }

}
