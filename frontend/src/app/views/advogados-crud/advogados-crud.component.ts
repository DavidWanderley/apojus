import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-advogados-crud',
  templateUrl: './advogados-crud.component.html',
  styleUrls: ['./advogados-crud.component.css']
})
export class AdvogadosCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Advogados',
      icon: 'groups',
      routeUrl: '/advogado'
    }
  }

  ngOnInit(): void {
  }

  navigateToAdvogadoCreate(): void {
    this.router.navigate(['/advogado/create'])
  }
}
