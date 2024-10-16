import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bet } from '../../models/Bet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BetCreationService {
  constructor(
    private http: HttpClient
  ) { }

  public createBet(bet:Bet):Observable<any> {
    return this.http.post('http://localhost:8080/create-bet', bet, {
      headers: { 'Content-Type': 'application/json' }
    });
  }
}