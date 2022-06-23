import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { login } from '../login.model';

@Component({
  selector: 'app-login-read',
  templateUrl: './login-read.component.html',
  styleUrls: ['./login-read.component.css']
})
export class LoginReadComponent implements OnInit {

  logins: login[] = [];
  displayedColumns = ['id', 'login', 'action']

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.read().subscribe(logins => {
      this.logins = logins
    });
  }

}
