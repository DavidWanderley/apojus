import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { login } from '../login.model';

@Component({
  selector: 'app-login-update',
  templateUrl: './login-update.component.html',
  styleUrls: ['./login-update.component.css']
})
export class LoginUpdateComponent implements OnInit {

  login!: login;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const d2 = Number(id);
    this.loginService.readById(d2).subscribe(login => {
      this.login = login;
    }); 
  }

  updatelogin(): void {
    this.loginService.update(this.login).subscribe(()=>{
      this.loginService.showMessage('login atualizado com sucesso');
      this.router.navigate(['/login']);
    });
  }

  cancel(): void {
    this.router.navigate(['/login'])
  }
}
