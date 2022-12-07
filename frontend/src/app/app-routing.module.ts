import { AtendimentosCrudComponent } from './views/atendimentos-crud/atendimentos-crud.component';
import { AtendimentosUpdateComponent } from './components/atendimentos/atendimentos-update/atendimentos-update.component';
import { AtendimentosDeleteComponent } from './components/atendimentos/atendimentos-delete/atendimentos-delete.component';
import { AtendimentosCreateComponent } from './components/atendimentos/atendimentos-create/atendimentos-create.component';
import { LoginDeleteComponent } from './components/login/login-delete/login-delete.component';
import { LoginUpdateComponent } from './components/login/login-update/login-update.component';
import { LoginCreateComponent } from './components/login/login-create/login-create.component';
import { LoginCrudComponent } from './views/login-crud/login-crud.component';
import { AdvogadosUpdateComponent } from './components/advogados/advogados-update/advogados-update.component';
import { AdvogadosDeleteComponent } from './components/advogados/advogados-delete/advogados-delete.component';
import { ProcessoCrudComponent } from './views/processo-crud/processo-crud.component';
import { ProcessoDeleteComponent } from './components/processo/processo-delete/processo-delete.component';
import { ProcessoUpdateComponent } from './components/processo/processo-update/processo-update.component';
import { ProcessoCreateComponent } from './components/processo/processo-create/processo-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ClienteCrudComponent } from "./views/cliente-crud/cliente-crud.component";
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { AdvogadosCrudComponent } from './views/advogados-crud/advogados-crud.component';
import { AdvogadosCreateComponent } from './components/advogados/advogados-create/advogados-create.component';
import { MovimentacaoCrudComponent } from './views/movimentacao-crud/movimentacao-crud.component';
import { MovimentacaoCreateComponent } from './components/movimentacao/movimentacao-create/movimentacao-create.component';
import { MovimentacaoDeleteComponent } from './components/movimentacao/movimentacao-delete/movimentacao-delete.component';
import { MovimentacaoUpdateComponent } from './components/movimentacao/movimentacao-update/movimentacao-update.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "login",
    component: LoginCrudComponent
  },
  {
    path: "login/create",
    component: LoginCreateComponent
  },
  {
    path: "login/update/:id",
    component: LoginUpdateComponent
  },
  {
    path: "login/delete/:id",
    component: LoginDeleteComponent
  },
  {
    path: "clientes",
    component: ClienteCrudComponent
  },
  {
    path: "clientes/create",
    component: ClienteCreateComponent
  },
  {
    path: "clientes/update/:id",
    component: ClienteUpdateComponent
  },
  {
    path: "clientes/delete/:id",
    component: ClienteDeleteComponent
  },
  {
    path: "processos",
    component: ProcessoCrudComponent
  },
  {
    path: "processos/create",
    component: ProcessoCreateComponent
  },
  {
    path: "processos/update/:id",
    component: ProcessoUpdateComponent
  },
  {
    path: "processos/delete/:id",
    component: ProcessoDeleteComponent
  },
  {
    path: "advogado",
    component: AdvogadosCrudComponent
  },
  {
    path: "advogado/create",
    component: AdvogadosCreateComponent
  },
  {
    path: "advogado/delete/:id",
    component: AdvogadosDeleteComponent
  },
  {
    path: "advogado/update/:id",
    component: AdvogadosUpdateComponent
  },
  {
    path: "atendimento/create",
    component: AtendimentosCreateComponent
  },
  {
    path: "atendimento/delete/:id",
    component: AtendimentosDeleteComponent
  },
  {
    path: "atendimento/update/:id",
    component: AtendimentosUpdateComponent
  },
  {
    path: "atendimento",
    component: AtendimentosCrudComponent
  },
  {
    path: "movimentacao",
    component: MovimentacaoCrudComponent
  },
  {
    path: "movimentacao/create",
    component: MovimentacaoCreateComponent
  },
  {
    path: "movimentacao/delete/:id",
    component: MovimentacaoDeleteComponent
  },
  {
    path: "movimentacao/update/:id",
    component: MovimentacaoUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
