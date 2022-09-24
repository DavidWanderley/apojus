import { Component, OnInit } from '@angular/core';
import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atendimentos-crud',
  templateUrl: './atendimentos-crud.component.html',
  styleUrls: ['./atendimentos-crud.component.css']
})
export class AtendimentosCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Atendimentos',
      icon: 'groups_3',
      routeUrl: '/atendimento'
    }
  }

  ngOnInit(): void {
  }

  navigateToAtendimentoCreate(): void {
    this.router.navigate(['/atendimento/create'])
  }
}



