import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-processo-crud',
  templateUrl: './processo-crud.component.html',
  styleUrls: ['./processo-crud.component.css']
})
export class ProcessoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Processos',
      icon: 'description',
      routeUrl: '/processos'
    }
   }

  ngOnInit(): void {
  }

  navigateToProcessoCreate(): void {
    this.router.navigate(['/processos/create'])
  }

}
