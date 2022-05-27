import { Cliente } from './../cliente.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-update',
  templateUrl: './cliente-update.component.html',
  styleUrls: ['./cliente-update.component.css']
})
export class ClienteUpdateComponent implements OnInit {

  cliente!: Cliente;

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const d2 = Number(id);
    this.clienteService.readById(d2).subscribe(cliente => {
      this.cliente = cliente;
    });

  }

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe(()=>{
      this.clienteService.showMessage('Cliente atualizado com sucesso');
      this.router.navigate(['/clientes']);
    });
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  }
}
