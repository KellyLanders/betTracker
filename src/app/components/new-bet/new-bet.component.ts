import { formatNumber } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedDataService } from '../../services/shared-data/shared-data.service';
import { BetCreationService } from '../../services/bet-creation/bet-creation.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-new-bet',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './new-bet.component.html',
  styleUrl: './new-bet.component.scss'
})
export class NewBetComponent {

  constructor(
    private sharedDataService: SharedDataService,
    private betCreationService: BetCreationService
  ) {}
  
  newBetForm: FormGroup<any> = new FormGroup({
    initiator: new FormControl('', Validators.required),
    opponent: new FormControl('', Validators.required),
    amount: new FormControl('', Validators.required),
    bet: new FormControl('', Validators.required),
  });

  createBet() {
    //you will submit this to a server endpoint via http.post
    //this.newBetForm.value is the POST body you would send
    //you may have to massage or clean up the object, but thats the gist.
    console.log(this.newBetForm.value);

    this.betCreationService.createBet(this.newBetForm.value).subscribe(
      (response) => {
        this.sharedDataService.sendData(response);
      }
    )
  }

}
