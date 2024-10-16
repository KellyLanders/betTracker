import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-bet-bar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule, CommonModule, BetBarComponent],
  templateUrl: './bet-bar.component.html',
  styleUrl: './bet-bar.component.scss'
})
export class BetBarComponent {

}
