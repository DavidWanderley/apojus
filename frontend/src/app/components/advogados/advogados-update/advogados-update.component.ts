import { Component, OnInit } from '@angular/core';
import { Advogado } from './../advogados.model';
import { AdvogadosService } from '../advogados.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-advogados-update',
  templateUrl: './advogados-update.component.html',
  styleUrls: ['./advogados-update.component.css']
})
export class AdvogadosUpdateComponent implements OnInit {

  advogado!: Advogado;

  constructor(private advogadoService: AdvogadosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const d2 = Number(id);
    this.advogadoService.readById(d2).subscribe(advogado => {
      this.advogado = advogado;
    });
  }

  updateAdvogado(): void {
    this.advogadoService.update(this.advogado).subscribe(()=>{
      this.advogadoService.showMessage('Advogado atualizado com sucesso');
      this.router.navigate(['/advogado']);
    });
  }

  cancel(): void {
    this.router.navigate(['/advogado'])
  }

}
