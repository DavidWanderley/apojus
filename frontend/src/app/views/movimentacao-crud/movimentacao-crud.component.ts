import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimentacao-crud',
  templateUrl: './movimentacao-crud.component.html',
  styleUrls: ['./movimentacao-crud.component.css']
})
export class MovimentacaoCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de movimentacao',
      icon: 'description',
      routeUrl: '/movimentacao'
    }
  }

  ngOnInit(): void {
  }

  navigateToMovimentacaoCreate(): void {
    this.router.navigate(['/movimentacao/create'])
  }

}
