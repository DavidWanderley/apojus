import { Movimentacao } from './../movimentacao.model'
import { MovimentacaoService } from './../movimentacao.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movimentacao-create',
  templateUrl: './movimentacao-create.component.html',
  styleUrls: ['./movimentacao-create.component.css']
})
export class MovimentacaoCreateComponent implements OnInit {

  movimentacao: Movimentacao = {
    Prazo: '',
    diligencia: '',
    dataM: '',
    TipoM: '',
    faseP: '',
    valor: ''
  }

  constructor(private movimentacaoService: MovimentacaoService, private router: Router) { }

  ngOnInit(): void {
  }

  createMovimentacao(): void{
    this.movimentacaoService.create(this.movimentacao).subscribe(() => {
      this.movimentacaoService.showMessage('movimentacao cadastrado');
      this.router.navigate(['/movimentacao']);
    })

  }

  cancel(): void{
    this.router.navigate(['/movimentacao']);
  }


}
