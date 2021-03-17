import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginWithCredentials(username: string, password: string): boolean {
    if('wuguojun' == username && password == '123456') {
      console.log('login successful');
      return true;
    }
    else {
      console.log('账号密码可能有误');
      return false;
    }
  }

}
