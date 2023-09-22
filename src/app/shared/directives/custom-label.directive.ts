import { Directive, ElementRef, OnInit, Input } from '@angular/core';
import { ValidationErrors } from "@angular/forms";

@Directive({
  selector: '[CustomLabel]'
})
export class CustomLabelDirective  implements OnInit{

  private htmlElement? : ElementRef<HTMLElement>
  private _color : string='red'
  private _erros? : ValidationErrors | null;

  @Input() set color(value : string) {
   this._color = value
    this.setSyle();

  }

  @Input() set erros (value : ValidationErrors | null | undefined){
    this._erros = value;
    
    this.setErrorMessage();
  };
  

  constructor(private el: ElementRef<HTMLElement> ) { 
   this.htmlElement = el;

    
  }


  ngOnInit(): void {

  }

  setSyle(){
    if(!this.htmlElement) return;


    this.htmlElement!.nativeElement.style.color = this._color
  }

  setErrorMessage(){
    if(!this.htmlElement) return;

    if(!this._erros){
      this.htmlElement.nativeElement.innerHTML = 'No hay errores';
      return
    }
    const errors  = Object.keys(this._erros);

    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      return
    }

    if(errors.includes('minlength')){
      this.htmlElement.nativeElement.innerHTML = 'Este campo requiere 6 letras';
      return
    }

    if(errors.includes('email')){
      this.htmlElement.nativeElement.innerHTML = 'Este campo debe ser correo electronico';
      return
    }



  }

}
