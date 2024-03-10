import { Component } from '@angular/core';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent {
  transactions: string[] = ['Transaction 1: $100', 'Transaction 2: $50', 'Transaction 3: $200'];

  addTransaction(transaction: string) {
    // Logic to add a new transaction (e.g., push it to the array)
    this.transactions.push(transaction);
  }
}
