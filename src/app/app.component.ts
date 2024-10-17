import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BetBarComponent } from "./components/bet-bar/bet-bar/bet-bar.component";
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, BetBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = "Gambler's Log";
  isAuthenticated:boolean | null = null;
  accessToken:any


  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.checkAuthenticationStatus();
  }

  private checkAuthenticationStatus():void {
    this.authService.isAuthenticated$.subscribe({
      next: (isAuthenticated:boolean) => { 
        this.isAuthenticated = isAuthenticated; 
        console.log(this.isAuthenticated, 'auth status');

        if(this.isAuthenticated) {
          this.getAccessToken();
        } else {
          this.login();
        }
      }
    })
  }

  getAccessToken() {
    this.authService.getAccessTokenSilently().subscribe({
      next: (token) => {
        console.log(token, 'token');
        this.accessToken = token;
      }
    })
  }

  private login() {
    this.authService.loginWithRedirect().subscribe({
      next: () => { console.log('Logged In!'); },
      error: (error) => { console.log('Error logging in - ', error); }
    })
  }
}
