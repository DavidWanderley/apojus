import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { ResponseLogin } from './ResponseLogin';
import { RequestLogin } from './RequestLogin';
import { login } from './login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:3004/login";

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }
  
  doLogin(requestLogin: RequestLogin): Observable<ResponseLogin>{
    return this.http.post<ResponseLogin>(this.baseUrl, requestLogin)
  }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration:3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  create(login: login): Observable<login> {
    return this.http.post<login>(this.baseUrl, login).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  read():  Observable<login[]>{
    return this.http.get<login[]>(this.baseUrl).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<login> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<login>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  update(login: login): Observable<login>{
    const url = `${this.baseUrl}/${login.id}`
    return this.http.put<login>(url, login).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  delete(id: string): Observable<login> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<login>(url).pipe(
      map((obj) => obj),
      catchError(e => this.errorHandler(e))
    );
  }
  
  errorHandler(e: any): Observable<any>{
    this.showMessage("Ocorreu um erro!", true)
    return EMPTY
  }

}
