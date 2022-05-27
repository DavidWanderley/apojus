import { Router } from '@angular/router';
import { HeaderService } from './../../components/template/header/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeaderService, private router: Router) {
    headerService.headerData = {
      title: 'Apojus',
      icon: 'home',
      routeUrl: ''
    }
  }
   
  ngOnInit(): void {
  }

}
