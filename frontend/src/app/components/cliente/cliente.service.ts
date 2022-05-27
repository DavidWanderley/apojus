import { catchError, map } from 'rxjs/operators';
import { Cliente } from './cliente.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = "http://localhost:3001/clientes";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl, cliente).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read():  Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cliente>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(cliente: Cliente): Observable<Cliente>{
    const url = `${this.baseUrl}/${cliente.id}`
    return this.http.put<Cliente>(url, cliente).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Cliente> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cliente>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }

}
