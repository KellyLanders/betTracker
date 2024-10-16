import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { BetBarComponent } from "./components/bet-bar/bet-bar/bet-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, BetBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'betTracker';
}
