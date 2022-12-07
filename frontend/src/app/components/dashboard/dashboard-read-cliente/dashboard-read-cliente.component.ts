import { ClienteService } from './../../cliente/cliente.service';
import { Cliente } from './../../cliente/cliente.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-read-cliente',
  templateUrl: './dashboard-read-cliente.component.html',
  styleUrls: ['./dashboard-read-cliente.component.css']
})
export class DashboardReadClienteComponent implements OnInit {
  
  clientes: Cliente[] = [];
  displayedColumns = ['id']

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes
    });
  }

}
