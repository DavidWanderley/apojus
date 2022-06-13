import { Component, OnInit } from '@angular/core';
import { Advogado } from './../advogados.model';
import { AdvogadosService } from '../advogados.service';

@Component({
  selector: 'app-advogados-read',
  templateUrl: './advogados-read.component.html',
  styleUrls: ['./advogados-read.component.css']
})
export class AdvogadosReadComponent implements OnInit {

  advogados: Advogado[] = [];
  displayedColumns = ['id', 'name', 'oab', 'action']


  constructor(private advogadosService: AdvogadosService) { }

  ngOnInit(): void {
    this.advogadosService.read().subscribe(advogados => {
      this.advogados = advogados
    });
  }

}
