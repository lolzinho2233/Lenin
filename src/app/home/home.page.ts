import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  valor1 = 0
  valor2 = 0
  verificar(num: number) : boolean{
    if(num % 2 == 0){
      return true;
    }
    else{
      return false;
    }
  }
  clicar() : void {
    let total = parseInt(this.valor1) + parseInt(this.valor2)
    alert('Divisível por 2? '+ this.verificar(total))
  }

}
