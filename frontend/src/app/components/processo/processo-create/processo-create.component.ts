import { Component, OnInit } from '@angular/core';
import { Processo } from './../processo.model'
import { ProcessoService } from './../processo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processo-create',
  templateUrl: './processo-create.component.html',
  styleUrls: ['./processo-create.component.css']
})
export class ProcessoCreateComponent implements OnInit {

  processo: Processo = {
    nProcesso: '',
    vara: ''
  }

  constructor(private processoService: ProcessoService, private router: Router) { }

  ngOnInit(): void {
  }

  createProcesso(): void{
    this.processoService.create(this.processo).subscribe(() => {
      this.processoService.showMessage('Processo cadastrado');
      this.router.navigate(['/processos']);
    })

  }

  cancel(): void{
    this.router.navigate(['/processos']);
  }

}
