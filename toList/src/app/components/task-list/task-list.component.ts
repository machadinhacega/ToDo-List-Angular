import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
// import { IListTask } from 'src/app/app.component';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit, OnDestroy {
  // esses são os parâmetros quee será enviados para os componentes (mandar por import)
  // a variável 'tasks' é do tipo 'IListTasks
  // Esse tipo (IListTasks) foi definido e exportado do app.ts
  @ Input() tasks: Task[] = [];
  // Mandando a informação
  @Output() handleTask = new EventEmitter();


  tasksFiltradas: Task[] = [];

  interval: any;
  
  teste(){
    console.log(this.tasks)
  }

  // Quando Inicia ESSA aplicação. O task-list
  ngOnInit(){
    console.log('Iniciou o task-list')

    // AQUI FOI PRA MOSTRAR QUE INICI ASSIM Q RODA O COMPONENTE
    // E PARA PARAR A CONTAGEM, POR EXEMPLO, PRECISARIA RODAR O DESTROY
    // this.interval = setInterval(() => {
    //   console.log('segundos');
    // },1000)

    // Como minhas tasks filtradas tão inicializando vazias, vou iniciar ja mostrando. Já passando o filtro
    // this.handleFilter('all')
    this.tasksFiltradas = this.tasks
  }

  ngOnDestroy(): void {
    console.log('Fechou o task-list')
    // clearInterval(this.interval)
  }

  selectedTask(task: Task){
    // mandando a task (emitindo a task)
    //  vai dizer "ei, vc foi clicado"
    this.handleTask.emit(task)
  }

  handleFilter(filter:string){
    if(filter === 'all'){
      this.tasksFiltradas = this.tasks;
      console.log(this.tasksFiltradas)
      return;
    }
    this.tasksFiltradas = this.tasks.filter(item => {
      if(item.status === filter){
        return item;
      }
      return
    })

    console.log(this.tasksFiltradas)
  }



}
