import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function dateLessThanValidator(): ValidatorFn{
                                    // Retorna ou um erro ou um null - O null é justamente pra qndo nao tiver erros 
    return (control: AbstractControl): ValidationErrors | null => {
        
        const [dd, mm, yyyy] = control.value.split('/')
        // Não sei pq o mês ta dando acima, mas pra resolver isso diminuí um aqui
        const inputDate = new Date(yyyy, mm-1, dd);
        const today = new Date;

        console.log(control.value)
        console.log(dd, mm, yyyy)
        console.log(inputDate)

        if(inputDate < today){
            return{dateLessThan: true};
            // console.log('VISH')
            // console.log(inputDate)
        }

        return null
    }
}





// PADRAO PARA CRIAR VALIDAÇÕES
// function dateLessThanValidator(): ValidatorFn{
//     // Retorna ou um erro ou um null - O null é justamente pra qndo nao tiver erros 
// return (control: AbstractControl): ValidationErrors | null => {

// console.log(control)
// // const inputDate = new Date
// return null
// }
// }