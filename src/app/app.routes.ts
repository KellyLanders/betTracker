import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyBetsComponent } from './components/my-bets/my-bets.component';
import { NewBetComponent } from './components/new-bet/new-bet.component';
import { OwesOwedComponent } from './components/owes-owed/owes-owed.component';

export const routes: Routes = [
    { path: 'new-bet', component: NewBetComponent },
    { path: 'my-bets', component: MyBetsComponent },
    { path: 'owes-owed', component: OwesOwedComponent}
];
