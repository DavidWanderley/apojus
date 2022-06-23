import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from './../../components/login/RequestLogin';
import { LoginService } from './../../components/login/login.service';

@Component({
  selector: 'app-login-crud',
  templateUrl: './login-crud.component.html',
  styleUrls: ['./login-crud.component.css']
})
export class LoginCrudComponent implements OnInit {

  requestLogin!: RequestLogin;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  navigateToCreate(): void {
    this.router.navigate(['/login/create'])
  }

  doLogin(): void{
    this.loginService.doLogin(this.requestLogin).subscribe((data) =>{
      console.log(data);
    })
  }
  
}
