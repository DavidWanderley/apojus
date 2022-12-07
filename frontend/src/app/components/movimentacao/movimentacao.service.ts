import { catchError, map } from 'rxjs/operators';
import { Movimentacao } from './movimentacao.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoService {

  baseUrl = "http://localhost:3006/movimentacao";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(movimentacao: Movimentacao): Observable<Movimentacao> {
    return this.http.post<Movimentacao>(this.baseUrl, movimentacao).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read():  Observable<Movimentacao[]>{
    return this.http.get<Movimentacao[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Movimentacao> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Movimentacao>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(movimentacao: Movimentacao): Observable<Movimentacao>{
    const url = `${this.baseUrl}/${movimentacao.id}`
    return this.http.put<Movimentacao>(url, movimentacao).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Movimentacao> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Movimentacao>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }

}

