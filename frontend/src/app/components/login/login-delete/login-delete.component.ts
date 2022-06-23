import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { login } from '../login.model';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-delete',
  templateUrl: './login-delete.component.html',
  styleUrls: ['./login-delete.component.css']
})
export class LoginDeleteComponent implements OnInit {

  login!: login;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const d2 = Number(id);
    this.loginService.readById(d2).subscribe(login => {
      this.login = login
    });
  }

  deletelogin(): void{
    this.loginService.delete(`${this.login.id}`).subscribe(()=>{
      this.loginService.showMessage('Cliente exluido com sucesso!')
      this.router.navigate(['/login'])
    });
  }
  cancel(): void{
    this.router.navigate(['/login'])
  }
}
