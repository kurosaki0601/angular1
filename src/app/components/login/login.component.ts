import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
  };
  constructor(private authService: AuthService, private router: Router) {}
  isInvalid: boolean = false;

  ngOnInit(): void {}
  login() {
    this.authService.login(this.user).subscribe(
      (res: any) => {
        this.router.navigate(['/home']);
        localStorage.setItem('token', res.token);
      },
      (err) => {
        this.isInvalid = true;
      }
    );
  }
}
