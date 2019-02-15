import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-atletas',
  templateUrl: './listar-atletas.component.html',
  styleUrls: ['./listar-atletas.component.css']
})
export class ListarAtletasComponent implements OnInit {
  constructor() { }
  atletas = null;

  ngOnInit() {
    this.atletas = JSON.parse(sessionStorage.getItem('atletas'));
    console.log(this.atletas);
  }

}
