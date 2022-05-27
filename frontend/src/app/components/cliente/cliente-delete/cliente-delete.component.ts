import { Router, ActivatedRoute } from '@angular/router';
import { ClienteService } from './../cliente.service';
import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-delete',
  templateUrl: './cliente-delete.component.html',
  styleUrls: ['./cliente-delete.component.css']
})
export class ClienteDeleteComponent implements OnInit {

  cliente!: Cliente;

  constructor(private clienteService: ClienteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const d2 = Number(id);
    this.clienteService.readById(d2).subscribe(cliente => {
      this.cliente = cliente
    });
  }

  deleteCliente(): void{
    this.clienteService.delete(`${this.cliente.id}`).subscribe(()=>{
      this.clienteService.showMessage('Cliente exluido com sucesso!')
      this.router.navigate(['/clientes'])
    });
  }
  cancel(): void{
    this.router.navigate(['/clientes'])
  }

}
