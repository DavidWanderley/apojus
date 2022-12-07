import { Component, OnInit } from '@angular/core';
import { Advogado } from './../../advogados/advogados.model';
import { AdvogadosService } from '../../advogados/advogados.service';

@Component({
  selector: 'app-dashboard-read-advogados',
  templateUrl: './dashboard-read-advogados.component.html',
  styleUrls: ['./dashboard-read-advogados.component.css']
})
export class DashboardReadAdvogadosComponent implements OnInit {
 
  advogados: Advogado[] = [];
  displayedColumns = ['id']

  constructor(private advogadosService: AdvogadosService) { }

  ngOnInit(): void {
    this.advogadosService.read().subscribe(advogados => {
      this.advogados = advogados
    });
  }

}

