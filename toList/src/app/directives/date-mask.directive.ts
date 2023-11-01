import { Directive, Host, HostListener } from '@angular/core';

@Directive({
  selector: '[appDateMask]'
})
export class DateMaskDirective {

  // O HostListener fica observando, tal qual o eventlistener
  // Aqui ele vai observar o input
  @HostListener('input', ['$event'])
  onInput(event: Event){
    // Aqui precisamos forçar a tipagem do event.target 
    // fazemos issso com o "as". FOi usada aqui para o input conseguir pegar o valor. 
    // Sem isso, o input é do tipo event.target, mas precisamos q seja do tipo HTMLInput
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // remover barras para nao contar no length
    // USANDO SO REPLACE
    // let apenasNumeros = value.replace('/','')
    // apenasNumeros = apenasNumeros.replace('/','')
    // USANDO REGEX para remover TODAS as barras
    const apenasNumeros = value.replace(/\D/g, '')

    // debugger

    // alterar o valor q a pessoa esta digitando para fazer nossa máscara
    // 00/00/0000/

    if(value.length >= 6){
      input.value = `${apenasNumeros.slice(0,2)}/${apenasNumeros.slice(2,4)}/${apenasNumeros.slice(4,8)}`
      return}

    if(value.length >= 3){
      input.value = `${apenasNumeros.slice(0,2)}/${apenasNumeros.slice(2)}`
      return}

    input.value = apenasNumeros
  }


  constructor() { }

}
