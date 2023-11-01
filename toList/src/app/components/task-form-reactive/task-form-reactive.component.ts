import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { dateLessThanValidator } from 'src/app/validators/dateLessThan.validator';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-form-reactive',
  templateUrl: './task-form-reactive.component.html',
  styleUrls: ['./task-form-reactive.component.scss']
})
export class TaskFormReactiveComponent implements OnInit {

  // EDITAR
  @Input() task: Task | null = null
  
  
  // OUTRA FORMA DE INICIAR O EDITAR
  // @Input() isEdit: boolean = false;

  // tags: string[] = []

  public form: FormGroup = this.formBuilder.group({
    // o primeiro parametro é o valor inicial do meu input, deposi vêm meus validadores
    title: ['', Validators.required],
    // Mais de uma validação:
    // title: ['', [Validators.required, Validators.email]],
    description: ['', Validators.required],
    valor: ['4.20', Validators.required],
    date: ['', Validators.required],
    // DATE TEXT
    // date: ['', [Validators.required, dateLessThanValidator()]],
    status: ['', Validators.required],
    // Se tivesse mais um item que carrega um objeto, era so repetir a mesma estrutura. Ex:
    // endereco: this.formBuilder.group({
    //    rua: ['', Validators.required],
    //    cidade: ['', Validators.required],
    //    estado: ['', Validators.required],
    // })
    tags: this.formBuilder.array([])
    // Validando TAGS nesse nivel, eu estou requerindo que tenha pelo menos 1 item no meu "tags" | (ver addTag())
    // tags: this.formBuilder.array([],Validators.required)
  })


  @Output() addTask = new EventEmitter()

  @Output() editTask = new EventEmitter()
  

  // Precisamos de um constructor para injetar uma dependencia, colocar um serviço aqui dentro
  // "formBuilder" poderia ser qualquer nome.
  constructor(private formBuilder: FormBuilder){}

  get title(){
    return this.form.get('title')
  }

  get myTags(){   // Esta buscando todos meus arrays
    return this.form.get('tags') as FormArray;
  }



  ngOnInit(){
    // this.form.setValue({title: this.task?.title, 
    //                     description: this.task?.description,
    //                     valor:this.task?.valor,
    //                     status:this.task?.status,
    //                     tags:this.task?.tags,
    //                     date:this.task?.date,
    //                   })
    
    // this.form.setValue({...this.task})

    this.form.patchValue({...this.task})

    this.task?.tags?.forEach(item =>{
      this.addTag(item)
    })



  }



  submitTask(){
    // console.log(this.form.value)
    // console.log('invalid', this.form.invalid)

    // esse if é para se caso o formulario estaja inválido, nao ir para as linhas de baixo, q sao as linhas q add a task à lista
    if (this.form.invalid) return

    this.addTask.emit(this.form.value);
    this.form.reset()
    
  }

  addTag(value = ''){
    // MESMA COISA:
    // this.form.get('tags')
    // this.myTags
    
    // Validando o formulário nesse nível, estou requerindo que as tags que forem abertas sejam preenchidas com algum texto 
    this.myTags.push(this.formBuilder.control(value, Validators.required))
  }

  
}
