import { catchError, map } from 'rxjs/operators';
import { Processo } from './processo.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProcessoService {

  baseUrl = "http://localhost:3002/processos";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(processo: Processo): Observable<Processo> {
    return this.http.post<Processo>(this.baseUrl, processo).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  read():  Observable<Processo[]>{
    return this.http.get<Processo[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Processo> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Processo>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(processo: Processo): Observable<Processo>{
    const url = `${this.baseUrl}/${processo.id}`
    return this.http.put<Processo>(url, processo).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Processo> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Processo>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }
}
