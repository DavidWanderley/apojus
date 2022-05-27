import { Component, OnInit } from '@angular/core';
import { Processo } from './../processo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProcessoService } from './../processo.service';

@Component({
  selector: 'app-processo-update',
  templateUrl: './processo-update.component.html',
  styleUrls: ['./processo-update.component.css']
})
export class ProcessoUpdateComponent implements OnInit {

  processo!: Processo;

  constructor(private processosService: ProcessoService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const d2 = Number(id);
    this.processosService.readById(d2).subscribe(processo => {
      this.processo = processo;
    });
  }

  updateProcesso(): void {
    this.processosService.update(this.processo).subscribe(()=>{
      this.processosService.showMessage('Processo atualizado com sucesso');
      this.router.navigate(['/processos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/processos']);
  }
}
