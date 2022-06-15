import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isAuthrize: boolean= false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogIn(){
  this.authService.login();
  this.isAuthrize= true;
  }

  onLogOut(){
    this.authService.logOut();
    this.isAuthrize=false
    }
}
