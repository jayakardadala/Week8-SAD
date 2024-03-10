import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoggedIn: boolean = false;

  login(username: string, password: string) {
    // Perform authentication logic (e.g., calling an authentication service)
    if (username === 'admin' && password === 'password') {
      this.isLoggedIn = true;
    } else {
      alert('Invalid username or password');
    }
  }

  logout() {
    this.isLoggedIn = false;
  }
}
