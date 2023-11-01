import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Task } from 'src/models/task.model';


// ANTERIORMENTE, NESSA PARTE, FOI FEITA UMA INTERFACE, MAS REFATORANDO FOI CRIADA UMA MODEL TASK. (task.model.ts)
// // cria um "modelo" pro nosso objeto
// export interface IListTask {
//   title: string;
//   description: string;
//   date: Date;
// }

// // Recebe todo o modelo da IListTask + o status
// export interface IListComplet extends IListTask{
//   status: boolean;
// }

export declare interface Remover{
  remover():void;
} 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, Remover{
  // um array de IListTasks (Array de objetos) >>> IListTask[] 
  // essa "Task" é a minha model task.model.ts
  // A gente inicia assim qndo é um array. Quando for um objeto inicia assim: selectedTask = new Task() (linha 41)
  listTask: Task[] = [];
  // listTaskComplet:IListComplet[] = []

  isVisible = true;

  // ANTES ESSA VARIAVEL ERA CRIADA ASSIM, MAS DEPOIS Q USAMOS MODEL PASSAMOS COMO "new Model()""
  // selectedTask: Task | null = null;   

  // Variável criada. O valor dela é passado no 'handleTask'
  // Essa new Task () é a minha model. Lá ja foiram passados os argumentos dentro do constructor
  // INICIANDO COMO NULL, JS RESOLVE O PROBLEMA DO FECHARDETALHES()
  selectedTask: Task | null = null;

  // Variavel do tipo Task Array para receber as tasks por push 
  listTaskToTable: Task[] = [];


  diretiveNumber = 25

  @Output() taskEdit = {
    title: 'Nascer',
    status: 'done',
    valor: '0',
    description: 'coitada',
    date: new Date('30/04/1994'),
    tags: ['tagC', 'tagE']
  }


  constructor(){
    console.log('constructor')
  }


  ngOnInit(){
    console.log('INICIEI APP')
    this.listTask.push({
      date: new Date('11/02/2023'),
      description: 'tarefa adicionada pelo metodo OnInit',
      title: 'Tarefa OnInit',
      status: 'toDO',
      valor: '4.20',
      tags: ['tagA', 'tagB']
    })
    this.listTask.push({
      date: new Date('10/22/2023'),
      description: 'às 23:47',
      title: 'Ir de arrasta',
      status: 'toDO',
      valor: '4.20',
      tags: ['tagA', 'tagB']
    })
    this.listTask.push({
      date: new Date('11/02/2023'),
      description: 'às 23:47 também',
      title: 'Submarinar',
      status: 'toDO',
      valor: '4.20',
      tags: ['tagA', 'tagB']
    })


    this.listTask.push({
      date: new Date('08/22/2023'),
      title: 'Coringar',
      description: 'HAHAHAHAHHAHAHA',
      status: 'doing',
      valor: '4.20',
      tags: ['tagA', 'tagB']
    })
    this.listTask.push({
      date: new Date('11/02/2023'),
      description: 'todos os dias',
      title: 'Se indignar',
      status: 'doing',
      valor: '4.20',
      tags: ['tagA', 'tagB']
    })
    this.listTask.push({
      date: new Date('11/02/2023'),
      description: 'sempre',
      title: 'Sofrer',
      status: 'done',
      valor: '4.20',
      tags: ['tagA', 'tagB']
    })  
    this.listTask.push({
      date: new Date('11/02/2023'),
      description: 'simbora',
      title: 'Estudar ne',
      status: 'done',
      valor: '4.20',
      tags: ['tagA', 'tagB']
    })
    this.listTask.push({
      date: new Date('11/02/2023'),
      description: 'izimaliacoisalindademeudeuso',
      title: 'Fazer carinho na gata',
      status: 'done',
      valor: '4.20',
      tags: ['tagA', 'tagB']
    })
    this.listTask.push({
      date: new Date('11/02/2023'),
      description: 'vagabundo vei',
      title: 'Xingar o vizinho',
      status: 'done',
      valor: '4.20',
      tags: ['tagA', 'tagB']
    })

  }

  // Se a gente quiser usar essa logica em varias partes do codigo, podemos só usar um get para nao repetir o codigo
  // get toDoStatus(){
  //   return this.listTask.filter(item => item.status === 'toDO')
  // }


  remover(): void {}
  onAddTask(task: Task) {
  // console.log(task)
  // na lista de tasks vai ser adicionada uma nova task. Essa nova task é a task enviada pelo form
    this.listTask.push(task)
    // this.listTask.push(new Task(task));
  }

  mostrarLista(){
    this.isVisible = !this.isVisible;
  }

  //  Aqui a variável "selectedTask" recebe um valor
  //  recebe uma task e passa essa task para a variavel selectedTask (essa variavel vai no app.html)
  //  Quando clicar no ngFor (app.html) vai passar o valor da task (task of tasks) para a função handle e receber aqui
  handleTaskApp(task: Task){
    this.selectedTask = task;
    
    // EDITAR
    this.taskEdit = this.selectedTask
    console.log(this.taskEdit)
    

    // alem de selecionar a task, vou dar um PUSH para a lista da TABELA
    this.listTaskToTable.push(task)
  }
 
  
  fecharDetalhes() {
    // QNDO REFATOROU USANDO MODEL, PRECISOU MUDAR ESSA LINHA PQ A TASK NAO PODIA SER NULA
    this.selectedTask = null;
  }


  onEditTask(task: Task) {
    alert('pronto pra editar')
    // console.log(task)
    // na lista de tasks vai ser adicionada uma nova task. Essa nova task é a task enviada pelo form
    // this.listTask.push(task)
    // this.listTask.push(new Task(task));
    }
 
}
