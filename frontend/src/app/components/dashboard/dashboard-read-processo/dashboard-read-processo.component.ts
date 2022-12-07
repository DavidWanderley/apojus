import { Component, OnInit } from '@angular/core';
import { ProcessoService } from './../../processo/processo.service';
import { Processo } from './../../processo/processo.model';

@Component({
  selector: 'app-dashboard-read-processo',
  templateUrl: './dashboard-read-processo.component.html',
  styleUrls: ['./dashboard-read-processo.component.css']
})
export class DashboardReadProcessoComponent implements OnInit {
  
  processos: Processo[] = [];
  displayedColumns = ['id']
  
  constructor(private processoService: ProcessoService) { }

  ngOnInit(): void {
    this.processoService.read().subscribe(processos => {
      this.processos = processos
    });
  }

}
