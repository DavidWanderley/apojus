import { Component, OnInit } from '@angular/core';
import { ProcessoService } from './../processo.service';
import { Processo } from './../processo.model';

@Component({
  selector: 'app-processo-read',
  templateUrl: './processo-read.component.html',
  styleUrls: ['./processo-read.component.css']
})
export class ProcessoReadComponent implements OnInit {

  processos: Processo[] = [];
  displayedColumns = ['id', 'nProcesso', 'vara','liminar', 'dataAudiencia', 'action']

  constructor(private processoService: ProcessoService) { }

  ngOnInit(): void {
    this.processoService.read().subscribe(processos => {
      this.processos = processos
    });
  }

}
