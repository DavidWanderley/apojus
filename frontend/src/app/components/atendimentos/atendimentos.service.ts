import { Atendimento } from './atendimentos.model';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtendimentosService {
  
  baseUrl = "http://localhost:3005/atendimentos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  
  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(atendimento: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(this.baseUrl, atendimento).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read():  Observable<Atendimento[]>{
    return this.http.get<Atendimento[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Atendimento> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Atendimento>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(atendimento: Atendimento): Observable<Atendimento>{
    const url = `${this.baseUrl}/${atendimento.id}`
    return this.http.put<Atendimento>(url, atendimento).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Atendimento> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Atendimento>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }


}

