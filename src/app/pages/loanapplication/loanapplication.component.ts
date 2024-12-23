import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Application,
  ApplicationApiResponse,
  Loan,
} from '../../models/application.model';
import { CommonModule } from '@angular/common';
import { MasterxerviceService } from '../../service/masterxervice.service';

@Component({
  selector: 'app-loanapplication',
  imports: [FormsModule],
  templateUrl: './loanapplication.component.html',
  styles: ``,
})
export class LoanapplicationComponent {
  application: Application = new Application();
  loan: Loan = new Loan();
  constructor(private masterService: MasterxerviceService) {}

  addLoan() {
    const strObj = JSON.stringify(this.loan);
    const newObj = JSON.parse(strObj);
    this.application.Loans.push(newObj);
  }
  onSubmit() {
    this.masterService.addNewApplication(this.application).subscribe(
      (result: ApplicationApiResponse) => {
        if (result.Result) {
          alert(result.Message);
        } else {
          alert('Application failed');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
