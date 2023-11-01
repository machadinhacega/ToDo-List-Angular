import { Directive, ElementRef, Input } from '@angular/core';
import { Task } from 'src/models/task.model';

@Directive({
  selector: '[appDateWarning]'
})
export class DateWarningDirective {

  // @Input() task!: Task
  @Input() task!: Task

  constructor(private element: ElementRef) { }

  ngOnInit(){
    const dateTask = new Date(this.task.date)
    const dateToday = new Date()
    
    if(dateTask < dateToday){
      this.element.nativeElement.style.color = 'red'
    }
    // this.element.nativeElement.style.background = 'blue'
    // if(this.task.status == "done"){
    //   this.element.nativeElement.style.background = "green"
    //   this.element.nativeElement.style.color = "#fff"
    // }
    // // a data da tarefa foi convertida para uma new Date para ficar no mesmo padrão Date 
    // else if(new Date(this.task.date) < new Date()){
    //   this.element.nativeElement.style.background = 'red'
    //   this.element.nativeElement.style.color = "#fff"
    // }

    // console.log('DIRECTIVE')
    // console.log(this.task.date)
    // console.log(new Date(this.task.date))
    // console.log(typeof(this.task.date.at(-1)))

    // this.element.nativeElement.style.background = "red"
  }

}
