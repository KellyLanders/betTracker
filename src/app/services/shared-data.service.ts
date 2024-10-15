import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private dataSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public data$: Observable<any> = this.dataSubject.asObservable();

  constructor() { }

  newBetData: any[] = []

  public sendData(data: any) {
    this.newBetData.push(data);
    this.dataSubject.next(this.newBetData);
  }  
}
