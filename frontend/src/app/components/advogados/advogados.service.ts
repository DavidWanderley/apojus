import { catchError, map } from 'rxjs/operators';
import { Advogado } from './advogados.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvogadosService {

  baseUrl = "http://localhost:3003/advogados";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(advogado: Advogado): Observable<Advogado> {
    return this.http.post<Advogado>(this.baseUrl, advogado).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read():  Observable<Advogado[]>{
    return this.http.get<Advogado[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Advogado> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Advogado>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(advogado: Advogado): Observable<Advogado>{
    const url = `${this.baseUrl}/${advogado.id}`
    return this.http.put<Advogado>(url, advogado).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<Advogado> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Advogado>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }

}
