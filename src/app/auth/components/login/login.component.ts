import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  private loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
      this.buildForm();
  }

  private buildForm() {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      })
  }


}
