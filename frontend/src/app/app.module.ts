import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component'

import { MatSidenavModule } from '@angular/material/sidenav'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteRead2Component } from './components/cliente/cliente-read2/cliente-read2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';

import { ProcessoCrudComponent } from './views/processo-crud/processo-crud.component';
import { ProcessoCreateComponent } from './components/processo/processo-create/processo-create.component';
import { ProcessoReadComponent } from './components/processo/processo-read/processo-read.component';
import { ProcessoUpdateComponent } from './components/processo/processo-update/processo-update.component';
import { ProcessoDeleteComponent } from './components/processo/processo-delete/processo-delete.component';
import { AdvogadosReadComponent } from './components/advogados/advogados-read/advogados-read.component';
import { AdvogadosUpdateComponent } from './components/advogados/advogados-update/advogados-update.component';
import { AdvogadosDeleteComponent } from './components/advogados/advogados-delete/advogados-delete.component';
import { AdvogadosCreateComponent } from './components/advogados/advogados-create/advogados-create.component';
import { AdvogadosCrudComponent } from './views/advogados-crud/advogados-crud.component';
import { LoginCreateComponent } from './components/login/login-create/login-create.component';
import { LoginReadComponent } from './components/login/login-read/login-read.component';
import { LoginDeleteComponent } from './components/login/login-delete/login-delete.component';
import { LoginUpdateComponent } from './components/login/login-update/login-update.component';
import { LoginCrudComponent } from './views/login-crud/login-crud.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ClienteCrudComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteRead2Component,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    ProcessoCrudComponent,
    ProcessoCreateComponent,
    ProcessoReadComponent,
    ProcessoUpdateComponent,
    ProcessoDeleteComponent,
    AdvogadosReadComponent,
    AdvogadosUpdateComponent,
    AdvogadosDeleteComponent,
    AdvogadosCreateComponent,
    AdvogadosCrudComponent,
    LoginCreateComponent,
    LoginReadComponent,
    LoginDeleteComponent,
    LoginUpdateComponent,
    LoginCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
