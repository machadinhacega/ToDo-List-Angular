import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { IListTask } from 'src/app/app.component';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss']
})
export class TaskDetailsComponent {
  // Esse input vai receber as informações do outro component (task-list) a clicar
  // Ele recebe uma task do tipo Task (definido no pai)
  @Input() task: Task | null = null;
  // Sempre que eu quero comunicar com o componente PAI, uso um Output
  @Output() closeDetail = new EventEmitter();

  closeDetailContainer(){
    // Esta avisando que esse botão foi clicado. Quem vai fazer algo com essa informação é o componente pai (app)
    this.closeDetail.emit()
  }

}
