import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../../services/shared-data.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-my-bets',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './my-bets.component.html',
  styleUrl: './my-bets.component.scss'
})
export class MyBetsComponent implements OnInit{

  constructor(private sharedDataService: SharedDataService) {}

  bets: any[] = [];

  ngOnInit(): void {
    this.sharedDataService.data$.subscribe(
      (data) => {
        console.log(data, 'from my bets');
        //uncomment this once you start getting the backend hooked-up
        // this.bets = data;

        this.bets = [
          {
            initiator : "Larry",
            opponent: "Jeff",
            amount: "$10,000",
            bet: "President"
          }
        ]
      }
    )
  }

}
