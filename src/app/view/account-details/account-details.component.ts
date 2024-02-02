import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Acopening } from 'src/app/acopening';
import { AcopeningService } from 'src/app/acopening.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.css']
})
export class AccountDetailsComponent {
  

  accountNumber: number;
  accountDetails: any;
  accountNotFound: boolean = false;
  depositAmount: number;
  withdrawAmount: number;


  constructor(private acOpeningService: AcopeningService) {}

  getAccountDetails() {
    this.accountNotFound = false;
    this.acOpeningService.getAccountDetails(this.accountNumber)
      .subscribe(
        data => {
          this.accountDetails = data;
        },
        error => {
          console.error('Error fetching account details:', error);
          if (error.status === 404) {
            // Account not found (HTTP status code 404)
            this.accountNotFound = true;
          }
        }
      );
  }
  deposit() {
    this.acOpeningService.deposit(this.accountNumber, this.depositAmount)
      .subscribe(
        data => {
          this.getAccountDetails(); // Refresh account details after deposit
        },
        error => {
          console.error('Error depositing amount:', error);
        }
      );
  }

  withdraw() {
    this.acOpeningService.withdraw(this.accountNumber, this.withdrawAmount)
      .subscribe(
        data => {
          this.getAccountDetails(); // Refresh account details after withdraw
        },
        error => {
          console.error('Error withdrawing amount:', error);
        }
      );
  }
}

