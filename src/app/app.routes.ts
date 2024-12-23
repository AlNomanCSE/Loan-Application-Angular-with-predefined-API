import { Routes } from '@angular/router';
import { LoanapplicationComponent } from './pages/loanapplication/loanapplication.component';
import { LoanapplicationListComponent } from './pages/loanapplication-list/loanapplication-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'newApplication',
    pathMatch: 'full',
  },
  {
    path: 'newApplication',
    component: LoanapplicationComponent,
  },
  {
    path:'applicationList',
    component: LoanapplicationListComponent
  }
];
