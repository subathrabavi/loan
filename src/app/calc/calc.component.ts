import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  loanAmount: number;
  interestRate: number=10;
  loanTerm: number;
  monthlyPayment: number;

  calculateLoan(): void {
    const monthlyInterestRate = this.interestRate / 100 / 12;
    const numberOfPayments = this.loanTerm * 12;

    const monthlyPayment = (this.loanAmount * monthlyInterestRate) /
                           (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    this.monthlyPayment = monthlyPayment;
  }

}
