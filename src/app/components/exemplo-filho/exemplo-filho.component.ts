import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exemplo-filho',
  templateUrl: './exemplo-filho.component.html',
  styleUrls: ['./exemplo-filho.component.scss']
})
export class ExemploFilhoComponent {

  @Input() informacaoFilho!: any
  
  constructor(){}
  

}
