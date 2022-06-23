import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { login } from '../login.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
  styleUrls: ['./login-create.component.css']
})
export class LoginCreateComponent implements OnInit {

  login: login = {
    login: '',
    password: '',
  }

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  createLogin(): void{
    this.loginService.create(this.login).subscribe(() => {
      this.loginService.showMessage('cliente cadastrado');
      this.router.navigate(['/login']);
    })
  }

  cancel(): void{
    this.router.navigate(['/login']);
  }
}
