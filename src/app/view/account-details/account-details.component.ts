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
  accountDetails: Acopening=new Acopening();
  accountNotFound: boolean = false;
  depositAmount: number;
  withdrawAmount: number;

  constructor(private acOpeningService: AcopeningService) {}

  getAccountDetails() {
    console.log('Account Number:', this.accountNumber);
    this.accountNotFound = false;
    this.acOpeningService.getAccountDetails(this.accountNumber)
      .subscribe(
        data => {
          console.log('Received data:', data);
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
    console.log(this.accountNumber, this.depositAmount);
    
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
