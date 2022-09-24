import { AtendimentosService } from './../atendimentos.service';
import { Atendimento } from './../atendimentos.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atendimentos-create',
  templateUrl: './atendimentos-create.component.html',
  styleUrls: ['./atendimentos-create.component.css']
})
export class AtendimentosCreateComponent implements OnInit {

  atendimentos: Atendimento = {
    NomeCliente: '',
    emailCliente: '',
    cpfCliente: '',
    telefoneCliente: '',
    Data: '',
    Hora: '',
    Endereco: '',
    TipoDeReuniao: '',
    Link: '',
    Descricao: '',
    NdoProcesso: '', 
  }

  constructor(private atendimentosService: AtendimentosService, private router: Router) { }

  ngOnInit(): void {
  }

  createAtendimentos(): void{
    this.atendimentosService.create(this.atendimentos).subscribe(() => {
      this.atendimentosService.showMessage('advogado cadastrado');
      this.router.navigate(['/atendimento']);
    })

  }

  cancel(): void{
    this.router.navigate(['/atendimento']);
  }
  
}
