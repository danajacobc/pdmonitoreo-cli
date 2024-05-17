import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserDTO } from '../../../dashboard/interfaces/userDTO';
import { lastValueFrom } from 'rxjs';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthService) {
      this.buildForm();
  }

  private buildForm() {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)]],
        password: ['', [Validators.required, Validators.minLength(8)]]
      })
  }

  redirect() {
    this.router.navigate(['/dashboard']);
  }

  async loginOrCreate() {
    const userDto: UserDTO = {
        email: this.loginForm.get("email")?.value,
        password: this.loginForm.get("password")?.value,
    }
    const result = await lastValueFrom(this.authService.loginOrCreate(userDto));
    if(result){
      localStorage.setItem('fakeToken', '3st3_3s_un_t0k3n_f4ls0')
      this.redirect();
    }
  }

}
