import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  nome: string = 'JOHN'
  idade: number = 20;
  job = 'prog';
  hobbies = ['jogar', 'treinar', 'correr'];
  car = {
    nome: "classic",
    ano: 2016
  }

}
