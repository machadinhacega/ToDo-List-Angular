import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-task-filter',
  templateUrl: './task-filter.component.html',
  styleUrls: ['./task-filter.component.scss']
})
export class TaskFilterComponent {

  //  receitinha de bolo: "new EventEmitter()"
  @Output() onChangeFilter = new EventEmitter();
  
  filter:string = 'all'
  
  selectFilter(){
    // Para passar pelo Output nossa informação:
    // chamama a variavel que ta no Output e coloca um emit. Nesse emit, passa a informação:
    this.onChangeFilter.emit(this.filter)
  }

}
