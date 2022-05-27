import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProcessoService } from './../processo.service';
import { Processo } from './../processo.model';

@Component({
  selector: 'app-processo-delete',
  templateUrl: './processo-delete.component.html',
  styleUrls: ['./processo-delete.component.css']
})
export class ProcessoDeleteComponent implements OnInit {
  
  processo!: Processo;

  constructor(private processoService: ProcessoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const d2 = Number(id);
    this.processoService.readById(d2).subscribe(processo => {
      this.processo = processo
    });
  }

  deleteCliente(): void{
    this.processoService.delete(`${this.processo.id}`).subscribe(()=>{
      this.processoService.showMessage('Cliente exluido com sucesso!')
      this.router.navigate(['/processos'])
    });
  }
  cancel(): void{
    this.router.navigate(['/clientes'])
  }

}
