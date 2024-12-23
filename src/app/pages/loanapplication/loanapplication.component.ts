import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Application, Loan } from '../../models/application.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loanapplication',
  imports: [FormsModule],
  templateUrl: './loanapplication.component.html',
  styles: ``,
})
export class LoanapplicationComponent {
  application: Application = new Application();
  loan: Loan = new Loan();
  addLoan() {
    const strObj = JSON.stringify(this.loan);
    const newObj = JSON.parse(strObj);
    this.application.Loans.push(newObj);
  }
}
