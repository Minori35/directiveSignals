import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[CustomLabel]'
})
export class CustomLabelDirective  implements OnInit{

  private htmlElement? : ElementRef<HTMLElement>
  private _color : string='red'

  @Input() set color(value : string) {
   this._color = value
    this.setSyle();
  }

  constructor(private el: ElementRef<HTMLElement> ) { 
   this.htmlElement = el;

   this.htmlElement.nativeElement.innerHTML='Holamundo'
    
  }


  ngOnInit(): void {

  }

  setSyle(){
    if(!this.htmlElement) return;


    this.htmlElement!.nativeElement.style.color = this._color
  }

}
