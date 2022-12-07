import { Movimentacao } from './../movimentacao.model'
import { MovimentacaoService } from './../movimentacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimentacao-read',
  templateUrl: './movimentacao-read.component.html',
  styleUrls: ['./movimentacao-read.component.css']
})
export class MovimentacaoReadComponent implements OnInit {

  movimentacao: Movimentacao[] = [];
  displayedColumns = ['id', 'Prazo', 'TipoM', 'action']

  constructor(private movimentacaoService: MovimentacaoService) { }

  ngOnInit(): void {
    this.movimentacaoService.read().subscribe(movimentacao => {
      this.movimentacao = movimentacao
    });
  }

}

