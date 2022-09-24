import { Component, OnInit } from '@angular/core';
import { Atendimento } from '../atendimentos.model';
import { AtendimentosService } from '../atendimentos.service';

@Component({
  selector: 'app-atendimentos-read',
  templateUrl: './atendimentos-read.component.html',
  styleUrls: ['./atendimentos-read.component.css']
})
export class AtendimentosReadComponent implements OnInit {

  atendimentos: Atendimento[] = [];
  displayedColumns = ['id', 'NomeCliente', 'Data', 'Hora', 'action']

  constructor(private atendimentosService: AtendimentosService) { }

  ngOnInit(): void {
    this.atendimentosService.read().subscribe(atendimentos => {
      this.atendimentos = atendimentos
    });
  }

}
