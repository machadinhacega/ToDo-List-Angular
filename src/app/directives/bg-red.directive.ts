import { Directive, ElementRef, Host, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBgRed]'
})
export class BgRedDirective {

  
  @Input() numero!:number;
  // Pode inicializar com um valor (zero por exemplo) ou apenas tipada (como acima)
  // @Input() numero = 0;


   constructor (private element: ElementRef) { 
    // this.element.nativeElement.style.background = 'red';
    // this.element.nativeElement.style.color = '#fff';
    // this.element.nativeElement.innerText = 'background vermelhinho';
  }

 
  @HostListener('mouseenter') onMouseEnter(){
    this.element.nativeElement.style.background = 'green'
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.element.nativeElement.style.background = 'purple'
  }

  
  ngOnInit(){
    this.element.nativeElement.style.background = 'red';
    this.element.nativeElement.style.color = '#fff';
  //   this.element.nativeElement.innerText = 'Lulala';

  console.log(this.numero)

  if(this.numero % 2 === 0){
    this.element.nativeElement.style.background = 'blue'
  } else{
    this.element.nativeElement.style.background = 'orange'
  }


  }
}
