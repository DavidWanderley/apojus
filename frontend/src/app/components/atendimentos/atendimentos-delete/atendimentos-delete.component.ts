import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Atendimento } from './../atendimentos.model';
import { AtendimentosService } from '../atendimentos.service';


@Component({
  selector: 'app-atendimentos-delete',
  templateUrl: './atendimentos-delete.component.html',
  styleUrls: ['./atendimentos-delete.component.css']
})
export class AtendimentosDeleteComponent implements OnInit {

  atendimento!: Atendimento;
  
  constructor(private atendimentoservice: AtendimentosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const d2 = Number(id);
    this.atendimentoservice.readById(d2).subscribe(atendimento => {
      this.atendimento = atendimento
    });
  }

  deleteAtendimento(): void{
    this.atendimentoservice.delete(`${this.atendimento.id}`).subscribe(()=>{
      this.atendimentoservice.showMessage('Atendimento exluido com sucesso!')
      this.router.navigate(['/atendimento'])
    });
  }

  cancel(): void{
    this.router.navigate(['/atendimento'])
  }
}
