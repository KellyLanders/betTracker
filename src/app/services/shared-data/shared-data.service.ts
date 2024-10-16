import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Bet } from '../../models/Bet';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public data$: Observable<Bet> = this.dataSubject.asObservable();

  constructor() { }

  newBetData: Bet[] = []

  public sendData(data: Bet) {
    this.newBetData.push(data);
    this.dataSubject.next(this.newBetData);
  }  
}
