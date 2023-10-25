import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public credentials = {
    email: '',
    password: ''
  }

  login() {
    console.log(this.credentials);
  }
}
