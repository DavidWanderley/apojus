import { Movimentacao } from './../movimentacao.model'
import { MovimentacaoService } from './../movimentacao.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movimentacao-update',
  templateUrl: './movimentacao-update.component.html',
  styleUrls: ['./movimentacao-update.component.css']
})
export class MovimentacaoUpdateComponent implements OnInit {

  movimentacao!: Movimentacao;

  constructor(private movimentacaoService: MovimentacaoService ,private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const d2 = Number(id);
    this.movimentacaoService.readById(d2).subscribe(movimentacao => {
      this.movimentacao = movimentacao;
    });
  }

  updateMovimentacao(): void {
    this.movimentacaoService.update(this.movimentacao).subscribe(()=>{
      this.movimentacaoService.showMessage('Movimentacao atualizado com sucesso');
      this.router.navigate(['/movimentacao']);
    });
  }

  cancel(): void {
    this.router.navigate(['/movimentacao'])
  }
}
