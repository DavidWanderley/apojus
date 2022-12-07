import { Component, OnInit } from '@angular/core';
import { Atendimento } from '../../atendimentos/atendimentos.model';
import { AtendimentosService } from '../../atendimentos/atendimentos.service';

@Component({
  selector: 'app-dashboard-read-atendimentos',
  templateUrl: './dashboard-read-atendimentos.component.html',
  styleUrls: ['./dashboard-read-atendimentos.component.css']
})
export class DashboardReadAtendimentosComponent implements OnInit {

  atendimentos: Atendimento[] = [];
  displayedColumns = ['id']

  constructor(private atendimentosService: AtendimentosService) { }

  ngOnInit(): void {
    this.atendimentosService.read().subscribe(atendimentos => {
      this.atendimentos = atendimentos
    });
  }

}

