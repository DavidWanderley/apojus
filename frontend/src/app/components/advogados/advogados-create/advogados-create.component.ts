import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Advogado } from './../advogados.model';
import { AdvogadosService } from '../advogados.service';

@Component({
  selector: 'app-advogados-create',
  templateUrl: './advogados-create.component.html',
  styleUrls: ['./advogados-create.component.css']
})
export class AdvogadosCreateComponent implements OnInit {

  advogado: Advogado = {
    name: '',
    oab: '',
  }
  constructor(private advogadosService: AdvogadosService, private router: Router) { }

  ngOnInit(): void {
  }

  createAdvogado(): void{
    this.advogadosService.create(this.advogado).subscribe(() => {
      this.advogadosService.showMessage('advogado cadastrado');
      this.router.navigate(['/advogado']);
    })

  }

  cancel(): void{
    this.router.navigate(['/advogado']);
  }
  
}
