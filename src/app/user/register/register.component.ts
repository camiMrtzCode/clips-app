import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public showAlert: boolean = false;
  public alertMsg: string = 'Please wait! your account is being created.';
  public alertColor = 'blue';

  public name = new FormControl('', [Validators.required, Validators.minLength(3)]);
  public email = new FormControl('', [Validators.required, Validators.email]);
  public age = new FormControl('', [Validators.required, Validators.min(18), Validators.max(50)]);
  public password = new FormControl('', [Validators.required,
    Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm),
    Validators.minLength(12),
    Validators.maxLength(12)
  ]);
  public confirmPassword = new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]);
  public phoneNumber = new FormControl('', [Validators.required]);

  public registerForm = new FormGroup({
    name: this.name,
    email: this.email,
    age: this.age,
    password: this.password,
    confirmPassword: this.confirmPassword,
    phoneNumber: this.phoneNumber
  });

  register() {
    this.showAlert = true;
    this.alertMsg = 'Please wait! your account is being created.';
    this.alertColor = 'blue';
  }

}
