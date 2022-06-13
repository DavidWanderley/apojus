import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Advogado } from './../advogados.model';
import { AdvogadosService } from '../advogados.service';

@Component({
  selector: 'app-advogados-delete',
  templateUrl: './advogados-delete.component.html',
  styleUrls: ['./advogados-delete.component.css']
})
export class AdvogadosDeleteComponent implements OnInit {

  advogado!: Advogado;

  constructor(private advogadoService: AdvogadosService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const d2 = Number(id);
    this.advogadoService.readById(d2).subscribe(advogado => {
      this.advogado = advogado
    });
  }

  deleteAdvogado(): void{
    this.advogadoService.delete(`${this.advogado.id}`).subscribe(()=>{
      this.advogadoService.showMessage('Advogado exluido com sucesso!')
      this.router.navigate(['/advogado'])
    });
  }
  cancel(): void{
    this.router.navigate(['/advogado'])
  }


}
