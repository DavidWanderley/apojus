import { Movimentacao } from './../movimentacao.model'
import { MovimentacaoService } from './../movimentacao.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movimentacao-delete',
  templateUrl: './movimentacao-delete.component.html',
  styleUrls: ['./movimentacao-delete.component.css']
})
export class MovimentacaoDeleteComponent implements OnInit {

  movimentacao!: Movimentacao;

  constructor(private movimentacaoService: MovimentacaoService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const d2 = Number(id);
    this.movimentacaoService.readById(d2).subscribe(movimentacao => {
      this.movimentacao = movimentacao
    });
  }

  deleteMovimentacao(): void{
    this.movimentacaoService.delete(`${this.movimentacao.id}`).subscribe(()=>{
      this.movimentacaoService.showMessage('Movimentacao exluida com sucesso!')
      this.router.navigate(['/movimentacao'])
    });
  }
  cancel(): void{
    this.router.navigate(['/movimentacao'])
  }

}
