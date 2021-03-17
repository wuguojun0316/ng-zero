import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  //providers: [AuthService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  text:string = 'Hello LoginComponent';

  constructor(@Inject('auth') private loginService: AuthService) { }

  ngOnInit(): void {
  }

  onClick(username: string, password: string) {
    this.loginService.loginWithCredentials(username, password);
    console.log('username:' + username + '\n\r' + 'password:' + password);
  }

}
