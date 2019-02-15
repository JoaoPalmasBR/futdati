import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar-atleta',
  templateUrl: './cadastrar-atleta.component.html',
  styleUrls: ['./cadastrar-atleta.component.css']
})
export class CadastrarAtletaComponent implements OnInit {
  nome = null;
  cpf = null;
  cgu = null;
  telefone = null;
  email = null;
  constructor() { }

  salvar() {
    console.clear();
    console.log(this.nome);
    console.log(this.cpf);
    console.log(this.cgu);
    console.log(this.telefone);
    console.log(this.email);
  }
  ngOnInit() {
  }

}
