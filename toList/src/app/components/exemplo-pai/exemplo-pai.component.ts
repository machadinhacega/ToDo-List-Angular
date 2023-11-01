import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-exemplo-pai',
  templateUrl: './exemplo-pai.component.html',
  styleUrls: ['./exemplo-pai.component.scss']
})
export class ExemploPaiComponent {

  @Output() informacaoPai = ['tchan', 'banguela', 'maldito']

  constructor(){}

}
