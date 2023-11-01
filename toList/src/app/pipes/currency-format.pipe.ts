import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: string, currencyCode: string = 'BRL'): unknown {
    console.log(value, currencyCode)
    const formatedValue = Number(value).  toLocaleString('pt-BR',{
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits:2,
    })
    return formatedValue;
  }

}
