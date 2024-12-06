import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthService)
  private router = inject(Router)

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.email, Validators.required]), // valores que quedarán por defecto
    password: new FormControl("", Validators.required) // valores que quedarán por defecto 
  })

  funIngresar() {
    this.authService.loginConNest(this.loginForm.value).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/admin"])
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
