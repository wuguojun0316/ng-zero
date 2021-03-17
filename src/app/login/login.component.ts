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

  username: string = "";
  password: string = "";

  constructor(@Inject('auth') private loginService: AuthService) { }

  ngOnInit(): void {
  }

  onClick(username: string, password: string) {
    this.loginService.loginWithCredentials(this.username, this.password);
    console.log('username:' + this.username + '\n\r' + 'password:' + this.password);
  }

  onSubmit(formValue: any) {
    this.loginService.loginWithCredentials(formValue.value.login.username, formValue.value.login.password);
    console.log(formValue);
  }

}
