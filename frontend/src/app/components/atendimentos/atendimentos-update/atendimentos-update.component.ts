import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atendimento } from '../atendimentos.model';
import { AtendimentosService } from '../atendimentos.service';

@Component({
  selector: 'app-atendimentos-update',
  templateUrl: './atendimentos-update.component.html',
  styleUrls: ['./atendimentos-update.component.css']
})
export class AtendimentosUpdateComponent implements OnInit {

  atendimento!: Atendimento;

  constructor(private atendimentoService: AtendimentosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const d2 = Number(id);
    this.atendimentoService.readById(d2).subscribe(atendimento => {
      this.atendimento = atendimento;
    });
  }

  updateAtendimento(): void {
    this.atendimentoService.update(this.atendimento).subscribe(()=>{
      this.atendimentoService.showMessage('Atendimento atualizado com sucesso');
      this.router.navigate(['/atendimento']);
    });
  }

  cancel(): void {
    this.router.navigate(['/atendimento'])
  }

}
